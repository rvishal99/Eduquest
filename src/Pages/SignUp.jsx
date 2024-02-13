import React, { useEffect, useState } from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { BsEye, BsPersonCircle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { createAccount } from '../Redux/Slices/AuthSlice'
import { isEmail, isValidPassword } from '../Helpers/regexMatcher'
import { AiOutlineArrowLeft } from "react-icons/ai";

function SignUp() {
    const dispatch = useDispatch()
    const navigator = useNavigate()

    const [previewImage, setImagePreview] = useState("")


    const [inputType, setInputType] = useState("password")


    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: "",
    })

    function handleUserInput(e) {
        const { name, value } = e.target

        setSignupData({
            ...signupData,
            [name]: value
        })
    }
    function getImage(e) {
        e.preventDefault();

        const uploadedImage = e.target.files[0];
        ////console.log("Uploaded Img-->",uploadedImage);

        if (uploadedImage) {
            setSignupData({
                ...signupData,
                avatar: uploadedImage
            });
            ////console.log("signupdata-->",signupData)

            const fileReader = new FileReader();

            fileReader.readAsDataURL(uploadedImage);

            fileReader.addEventListener("load", function () {
                ////console.log(this.result)
                setImagePreview(this.result);
                ////console.log("img preview-->",previewImage)
            });

        }
    }

    async function createNewAccount(e) {
        e.preventDefault();

        const { fullName, email, password, avatar } = signupData
        if (!fullName || !email || !password) {
            toast.error("Please fill all the details")
            return;
        }

        if (fullName.length < 5) {
            toast.error("Name Should be atleast of 5 characters")
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

        const formData = new FormData();

        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("avatar", avatar);

        //* dispatch create account action

        const response = await dispatch(createAccount(formData));

        // //console.log("dispatched response: ",response);

        if (response?.payload?.success) {
            navigator("/login");
        }


        setSignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: "",
        })

        setImagePreview("");



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
                <form noValidate onSubmit={createNewAccount} className="relative flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <Link className="absolute top-8 text-2xl link text-accent cursor-pointer" onClick={() => navigator(-1)}>
                        <AiOutlineArrowLeft />
                    </Link>
                    <h1 className='text-center text-2xl font-bold'>Registration Page</h1>

                    <label htmlFor="image_uploads" className='cursor-pointer'>
                        {
                            previewImage ? (
                                <img className='w-24 h-24 rounded-full m-auto' src={previewImage} />
                            ) : (<BsPersonCircle className='w-24 h-24 rounded-full m-auto' />)
                        }
                    </label>
                    <input onChange={getImage} type="file" className='hidden' id='image_uploads' name='image_uploads' accept=".jpg, .jpeg, .png" />


                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className='font-semibold'>Name</label>
                        <input type="text" required name='fullName' id='fullName' value={signupData.fullName} onChange={handleUserInput} placeholder='Enter your full name..' className='bg-transparent px-2 py-1 border' />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className='font-semibold'>Email</label>
                        <input type="email" required name='email' id='email' value={signupData.email} onChange={handleUserInput} placeholder='Enter your email..' className='bg-transparent px-2 py-1 border' />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <div className="relative w-full">
                            < input type={inputType} required name='password' id='password' value={signupData.password} onChange={handleUserInput} placeholder='Enter your password..' className='bg-transparent px-2 py-1 border w-full' />


                            <div onClick={(e) => {
                                e.preventDefault();
                                changeInputType();
                            }} >
                                <BsEye className='absolute top-2 right-2 cursor-pointer' />
                            </div>
                        </div>

                    </div>
                    <button type='submit' className='w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 mt-2'>
                        Create account
                    </button>

                    <p className="text-center">
                        Already have an account ? <Link to='/login' className='link text-accent no-underline'>Login</Link>
                    </p>
                </form>

            </div>
        </HomeLayout>

    )
}

export default SignUp