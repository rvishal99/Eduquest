import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom'

import homePageImg from '../assets/Images/homePageMainImage.png'
function HomePage() {
    return (
        <>

            <HomeLayout >
                {/*  The Below div is passed as children to HomeLayout component */}
                <h1 className='text-5xl ml-10 mt-3 sm:text-6xl text-center font-bold font-bebas sm:mt-3 tracking-wide'>
                    <Link to="/">
                        <span className='text-[#00FFFF] hover:text-[#40c3e4]'>Cour</span>
                        <span className='text-[#40c3e4] hover:text-[#00FFFF]'>sify</span>
                    </Link>
                </h1>
                <div className="pt-5 text-white flex flex-col sm:flex-row items-center justify-center gap-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 h-[90vh]">
                    <div className="mt-15 sm:mt-0 w-[90vw] sm:w-1/2 space-y-6 ">
                        <h1 className="text-3xl sm:text-5xl font-semibold font-poppins">
                            Find Out Best
                            <span className="ml-3 text-yellow-500 font-bold">
                                Online Courses
                            </span>
                        </h1>
                        <p className="text-md sm:text-xl text-gray-200">
                            We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost
                        </p>
                        <div className="flex gap-3">
                            <Link to="/courses">
                                <button className='bg-yellow-500 px-5 py-3 rounded-md font-semibold text-md sm:text-lg cursor-pointer hover:bg-yellow-600  transition-all ease-in-out  relative'>
                                    Explore Courses
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className='border border-yellow-500  px-5 py-3 rounded-md font-semibold text-md sm:text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out  relative'>
                                    Contact Us
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="w-[70vw] sm:w-1/2 mb-5 flex items-center justify-center">
                        <img src={homePageImg} alt="homepage image" />
                    </div>
                </div>
            </HomeLayout>
        </>
    )
}

export default HomePage