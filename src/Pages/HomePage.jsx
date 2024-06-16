import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom'

import homePageImg from '../assets/Images/homePageMainImage.png'
// import logo from '../assets/Images/eduquestlogo.png'
import { motion } from 'framer-motion'


function HomePage() {
    const container = (delay, xv) => ({
        hidden: { x: xv, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay },
        },
    });
    return (
        <>

            <HomeLayout >
                {/*  The Below div is passed as children to HomeLayout component */}
                <h1 className='text-5xl  mt-2 sm:text-7xl text-center font-bold font-bebas sm:mt-3 tracking-wide'>
                    {/* <img src={logo} alt="Eduquest logo" /> */}
                    <Link to="/">
                        <span className='text-[#00FFFF] hover:text-[#40c3e4]'>Edu</span>
                        <span className='text-[#40c3e4] hover:text-[#00FFFF]'>Quest</span>
                    </Link>
                </h1>
                <div className="mt-7 sm:mt-0 pt-5 text-white flex flex-col sm:flex-row items-center justify-center gap-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 h-[90vh]">
                    <motion.div
                        className="space-y-2 text-xl w-full sm:w-1/2 flex flex-col items-center gap-5 sm:items-start"
                        variants={container(0, -100)}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-2xl sm:text-5xl font-semibold font-poppins">
                            Find Out Best
                            <span className="ml-3 text-yellow-500 font-bold">
                                Online Courses
                            </span>
                        </h1>
                        <p className="mt-2 sm:mt-0 text-md sm:text-xl text-gray-200 ">
                            We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost
                        </p>
                        <div className="flex gap-3">
                            <Link to="/courses">
                                <button className='bg-yellow-500  px-4 py-2 sm:px-5 sm:py-3 rounded-md font-semibold text-md sm:text-lg cursor-pointer hover:bg-yellow-600  transition-all ease-in-out  relative'>
                                    Explore Courses
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className='border border-yellow-500  px-4 py-2 sm:px-5 sm:py-3 rounded-md font-semibold text-md sm:text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out  relative'>
                                    Contact Us
                                </button>
                            </Link>
                        </div>

                    </motion.div>
                    <motion.div
                        className="w-[70vw] sm:w-1/2 mb-5"
                        variants={container(0, 100)}
                        initial="hidden"
                        animate="visible"
                    >
                        <img src={homePageImg} alt="homepage image" className='w-full h-auto max-w-full rounded-lg object-cover' />
                    </motion.div>
                </div>
            </HomeLayout >
        </>
    )
}

export default HomePage