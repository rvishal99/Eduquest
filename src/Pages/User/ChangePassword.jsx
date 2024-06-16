import React, { useState } from 'react'
import HomeLayout from '../../Layouts/HomeLayout'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { BsEye } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import axiosInstance from '../../Helpers/axiosInstance'
import { useSelector } from 'react-redux'

const ChangePassword = () => {
    const [inputType, setInputType] = useState("password")
    const [inputType2, setInputType2] = useState("password")
    const [inputType3, setInputType3] = useState("password")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [oldPassword, setOldPassword] = useState("")

    const email = useSelector(state => state?.auth?.data?.email)
    const navigator = useNavigate();




    const changeInputType = () => {
        if (inputType === "text") {
            setInputType("password")
        }
        else {
            setInputType("text")
        }
    }
    const changeInputType2 = () => {
        if (inputType2 === "text") {
            setInputType2("password")
        }
        else {
            setInputType2("text")
        }
    }
    const changeInputType3 = () => {
        if (inputType3 === "text") {
            setInputType3("password")
        }
        else {
            setInputType3("text")
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!oldPassword || !newPassword || !confirmPassword) {
            toast.error("Please fill all the details")
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Confirm password doesn't match")
        }

        // alert(confirmPassword)

        // const formData = new FormData()

        // formData.append("password",newPassword)

        try {
            console.log(email)
            let response = axiosInstance.post(`user/change-password`, { oldPassword: oldPassword, email: email, password: newPassword });


            toast.promise(response, {
                loading: "Reseting password",
                success: (data) => {
                    return data?.data?.message;
                },
                error: "Failed to reset password"
            });

            response = await response;
            navigator("/login");
        }

        catch (error) {
            //console.log(error)
            toast.error(error?.response?.data?.message);
        }


    }
    return (
        <HomeLayout>
            <div className='flex items-center justify-center h-[100vh]'>
                <form noValidate
                    className='relative flex flex-col gap-5 rounded-lg p-4 shadow-[0_0_10px_black] text-white w-96'
                    onSubmit={handleSubmit}>
                    <Link className="absolute top-6 text-2xl link text-accent cursor-pointer" onClick={() => navigator(-1)}>
                        <AiOutlineArrowLeft />
                    </Link>
                    <h1 className="text-center text-2xl font-semibold">Edit profile</h1>
                    <div className="mt-3 flex flex-col gap-1">
                        <label className='font-semibold' htmlFor="password">
                            Enter Old password
                        </label>
                        <div className="relative w-full">
                            < input type={inputType3} required name='password' id='password' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder='Old Password' className='bg-transparent px-2 py-1 border w-full' />
                            <div onClick={(e) => {
                                e.preventDefault();
                                changeInputType3();
                            }} >
                                <BsEye className='absolute top-2 right-2 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='font-semibold' htmlFor="password">
                            Enter New password
                        </label>
                        <div className="relative w-full">
                            < input type={inputType} required name='password' id='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='New Password' className='bg-transparent px-2 py-1 border w-full' />
                            <div onClick={(e) => {
                                e.preventDefault();
                                changeInputType();
                            }} >
                                <BsEye className='absolute top-2 right-2 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='font-semibold' htmlFor="password">
                            Confirm password
                        </label>
                        <div className="relative w-full">
                            < input type={inputType2} required name='password' id='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='bg-transparent px-2 py-1 border w-full' />
                            <div onClick={(e) => {
                                e.preventDefault();
                                changeInputType2();
                            }} >
                                <BsEye className='absolute top-2 right-2 cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <button type='submit' className='w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 mt-2'>
                        Reset
                    </button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default ChangePassword