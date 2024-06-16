import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeLayout from '../../Layouts/HomeLayout';
import { useSelector } from 'react-redux';
import { FaCirclePlay } from "react-icons/fa6";
function CourseDescription() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const { isAdmin, data } = useSelector((state) => state.auth);

    return (
        <div>
            <HomeLayout>
                <div className="min-h-[90vh] pt-1 px-4 md:px-20 flex flex-col items-center text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 relative">
                        <div className="space-y-2 text-xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mb-10 text-center">
                                {state?.title}
                            </h1>
                            <img src={state?.thumbnail?.secure_url} alt="" className='w-full h-48 sm:h-64 rounded-lg hover:scale-105 transition-all ease-in-out duration-300' />
                        </div>
                        <div className="mt-10 space-y-5">
                            <p className='leading-6 text-justify'>{state?.description}</p>
                            <div className="space-y-4">
                                <div className="flex flex-col items-center md:items-start justify-between text-xl gap-2">
                                    <p className='font-semibold'>
                                        <span className='text-yellow-500 font-bold'>
                                            Total Lectures:{" "}
                                        </span>
                                        {state?.numberOfLectures}
                                    </p>
                                    <p className='font-semibold'>
                                        <span className='text-yellow-500 font-bold'>
                                            Instructor:{" "}
                                        </span>
                                        {state?.createdBy}
                                    </p>
                                </div>

                                <button onClick={() => navigate("/course/displaylectures", { state: { ...state } })} className='mt-2 bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full flex items-center justify-center gap-4 '>
                                    <FaCirclePlay />
                                    <span>Watch Lectures</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
        </div>
    );
}

export default CourseDescription;
