import React, { useState } from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import toast from 'react-hot-toast';
import { isEmail } from '../Helpers/regexMatcher';
import axiosInstance from '../Helpers/axiosInstance';

function Contact() {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleInputChange(e) {
        const { name, value } = e.target;

        setUserInput((prevUserInput) => ({
            ...prevUserInput,
            [name]: value,
        }))
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if (!userInput.email || !userInput.name || !userInput.message) {
            toast.error("All fields are mandatory!")
            return;
        }

        if (!isEmail(userInput.email)) {
            toast.error("Invalid Email!")
            return;
        }


        try {
            const response = axiosInstance.post("/contact", userInput)
            {
                toast.promise(response, {
                    loading: "Submitting your message...",
                    success: "Form submitted successfully",
                    error: "Failed to submit the form"
                })

                const contactResponse = await response;

                if (contactResponse?.data?.success) {
                    setUserInput({
                        name: "",
                        email: "",
                        message: ""
                    })
                }
            }
        } catch (error) {
            toast.error("Operation Failed")
        }


    }
    return (
        <HomeLayout>
            <div className='flex items-center justify-center h-[100vh]'>
                <form className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]" onSubmit={onFormSubmit} noValidate>

                    <h1 className='text-3xl font-semibold'>
                        Contact Form
                    </h1>
                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="name" className='text-xl font-semibold'>
                            Name
                        </label>
                        <input name="name" type="text" className='bg-transparent border px-2 py-1 rounded-sm' id='name' placeholder='Enter your name'
                            value={userInput.name}
                            onChange={handleInputChange} />

                    </div>
                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="email" className='text-xl font-semibold'>
                            Email
                        </label>
                        <input name="email" type="email" className='bg-transparent border px-2 py-1 rounded-sm' id='email' placeholder='Enter your email'
                            value={userInput.email}
                            onChange={handleInputChange} />


                    </div>
                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="message" className='text-xl font-semibold'>
                            Message
                        </label>
                        <textarea name="message" className='bg-transparent border px-2 py-1 rounded-sm resize-none h-40' id='message' placeholder='Enter your message'
                            value={userInput.message}
                            onChange={handleInputChange} />

                    </div>

                    <button type='sumbit' className='w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold '>
                        Submit
                    </button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Contact