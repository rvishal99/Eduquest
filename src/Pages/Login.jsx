import React, { useEffect, useState } from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { BsEye } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { loginAccount } from '../Redux/Slices/AuthSlice'
import { isEmail, isValidPassword } from '../Helpers/regexMatcher'
import { AiOutlineArrowLeft } from "react-icons/ai";

function Login() {
    const dispatch = useDispatch()
    const navigator = useNavigate()



    const [inputType, setInputType] = useState("password")


    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    function handleUserInput(e) {
        const { name, value } = e.target

        setLoginData({
            ...loginData,
            [name]: value
        })
    }


    async function onLogin(e) {
        e.preventDefault();

        const { email, password } = loginData
        if (!email || !password) {
            toast.error("Please fill all the details")
            return;
        }



        if (!isEmail(email)) {

            toast.error("Invalid Email Id")
            return;
        }

        if (!isValidPassword(password)) {
            toast.error(
                "Minimum password length should be 8 with Uppercase, Lowercase, Number and Symbol"
            );
            return;
        }


        //* dispatch create account action

        const response = await dispatch(loginAccount(loginData));

        //console.log("dispatched response: ", response);

        if (response?.payload?.success) {
            navigator("/");
        }


        setLoginData({
            email: "",
            password: "",
        })
    }
    const changeInputType = () => {
        if (inputType === "text") {
            setInputType("password")
        }
        else {
            setInputType("text")
        }
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form noValidate onSubmit={onLogin} className="relative flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <Link className="absolute top-8 text-2xl link text-accent cursor-pointer" onClick={() => navigator(-1)}>
                        <AiOutlineArrowLeft />
                    </Link>
                    <h1 className='text-center text-2xl font-bold mb-3'>Login Page</h1>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className='font-semibold'>Email</label>
                        <input type="email" required name='email' id='email' value={loginData.email} onChange={handleUserInput} placeholder='Enter your email..' className='bg-transparent px-2 py-1 border' />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <div className="relative w-full">
                            < input type={inputType} required name='password' id='password' value={loginData.password} onChange={handleUserInput} placeholder='Enter your password..' className='bg-transparent px-2 py-1 border w-full' />


                            <div onClick={(e) => {
                                e.preventDefault();
                                changeInputType();
                            }} >
                                <BsEye className='absolute top-2 right-2 cursor-pointer' />
                            </div>
                        </div>

                    </div>
                    <button type='submit' className='w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 mt-2'>
                        Login
                    </button>

                    <p className="text-center">
                        <Link to='/forgotPassword' className='link text-accent no-underline hover:text-[#00FFFF]'>Forgot Password ?</Link>
                    </p>
                    <p className="text-center">
                        Don't have an account ? <Link to='/signup' className='link text-accent no-underline'>Sign Up</Link>
                    </p>
                </form>

            </div>
        </HomeLayout>

    )
}

export default Login