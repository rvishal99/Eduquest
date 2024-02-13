import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Line } from 'react-chartjs-2'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAccount } from '../Redux/Slices/AuthSlice'


function HomeLayout({ children }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //* user is loggedIn or not
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

    //* for displaying the options acc to role

    const isAdmin = useSelector((state) => state?.auth?.isAdmin)



    const changeWidth = () => {
        const drawerSide = document.getElementsByClassName("drawer-side")

        // drawerSide[0].style.width = "1000px";
        drawerSide[0].style.width = "auto";
    }
    const hideDrawer = () => {
        const element = document.getElementsByClassName("drawer-toggle")

        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = "0";

    }
    const handleLogout = async (e) => {
        e.preventDefault()

        const res = await dispatch(logoutAccount())

        if (res?.payload?.success)
            navigate("/")

    }
    return (
        <>
            <div className='min-h-[90vh]'>
                <div className="drawer absolute left-0 z-50 w-fit sm:w-16 md:w-24 lg:w-32">
                    <input type="checkbox" className='drawer-toggle' id='my-drawer' />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className='cursor-pointer relative'>
                            <FiMenu size={"32px"} className='font-bold text-white m-4' onClick={changeWidth} />
                        </label>
                    </div>


                    <div className="drawer-side w-0 sm:w-48 md:w-64 lg:w-80">
                        <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content">
                            <li className="w-fit absolute right-2 z-50">
                                <button onClick={hideDrawer} className=''>
                                    <AiFillCloseCircle size={24} />
                                </button>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {
                                isLoggedIn && isAdmin &&
                                (
                                    <li>
                                        <Link to="/admin/dashboard">Admin Dashboard</Link>
                                    </li>
                                )
                            }
                            {
                                isLoggedIn && isAdmin &&
                                (
                                    <li>
                                        <Link to="/course/create">Create new course</Link>
                                    </li>
                                )
                            }
                            <li>
                                <Link to="/courses">All Courses</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            {
                                !isLoggedIn && (
                                    <li className='absolute bottom-4 w-[90%] '>
                                        <div className="w-full flex items-center justify-center">
                                            <Link to="/login" className='text-center btn-primary px-4 py-1 font-semibold rounded-md w-full'>Login</Link>
                                            <Link to="/signup" className='text-center btn-secondary px-4 py-1 font-semibold rounded-md w-full'>SignUp</Link>

                                        </div>
                                    </li>
                                )
                            }
                            {
                                isLoggedIn && (
                                    <li className='absolute bottom-4 w-[90%]'>
                                        <div className="w-full flex items-center justify-center">
                                            <Link to="/user/profile" className='text-center btn-primary px-2 py-1 font-semibold rounded-md w-full'>
                                                Profile
                                            </Link>
                                            <Link onClick={handleLogout} className='text-center btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                                Logout
                                            </Link>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                {children}

                <Footer />
            </div>

        </>
    )
}

export default HomeLayout