import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import aboutMainPage from '../assets/Images/aboutMainImage.png'

import apj from '../assets/Images/apj.png'
import billGates from '../assets/Images/billGates.png'
import einstein from '../assets/Images/einstein.png'
import nelsonMandela from '../assets/Images/nelsonMandela.png'
import steveJobs from '../assets/Images/steveJobs.png'
function AboutUs() {
    return (
        <>
            <HomeLayout>
                <div className="pl-10 pt-10 flex flex-col text-white">
                    <div className="flex items-center gap-5 mx-10">
                        <section className='w-full sm:w-1/2 space-y-10'>
                            <h1 className='text-4xl sm:text-5xl text-yellow-500 font-semibold'>Affordable and Quality Education</h1>
                            <p className='text-lg sm:text-xl text-gray-200'>
                                Our goal is to provide the Quality Education to the world.
                                We are providing the platform for the aspiring teachers and students to share their skills, creativity and knowledge to each other to empower and contribute in the growth and wellness of mankind.
                            </p>
                        </section>
                        <div className="w-1/2 hidden sm:block">
                            <img src={aboutMainPage} alt="" className='drop-shadow-2xl' id='test1' style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0)" }} />
                        </div>
                    </div>

                    <div className="carousel w-full sm:w-1/2 my-16 m-auto">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                                <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-md sm:text-xl text-gray-200">
                                    "Education is not the learning of facts, but the training of the
                                    mind to think."
                                </p>
                                <h3 className="text-2xl font-semibold">Albert Einstein</h3>

                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide5" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                                <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-md sm:text-xl text-gray-200">
                                    "Innovation distinguishes between a leader and a follower."
                                </p>
                                {/* for personality name */}
                                <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                                <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-sm sm:text-xl text-gray-200">
                                    "Technology is just a tool. In terms of getting the kids working
                                    together and motivating them, the teacher is the most
                                    important."
                                </p>
                                {/* for personality name */}
                                <h3 className="text-2xl font-semibold">Bill Gates</h3>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                                <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-md sm:text-xl text-gray-200">
                                "Excellence happens not by accident. It is a process."
                                </p>
                                {/* for personality name */}
                                <h3 className="text-2xl font-semibold">Dr.A.P.J. Abdul Kalam</h3>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide5" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                                <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-md sm:text-xl text-gray-200">
                                "Education is the most powerful weapon which you can use to change the world."
                                </p>
                                {/* for personality name */}
                                <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
        </>
    )
}

export default AboutUs