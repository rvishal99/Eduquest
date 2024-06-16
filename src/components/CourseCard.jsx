import React from 'react'
import { useNavigate } from 'react-router-dom'

function CourseCard({ data }) {

    const navigate = useNavigate();

    console.log(data)
    return (
        <div onClick={() => navigate("/course/description/", { state: { ...data } })}
            className='text-white w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[20%] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700 mb-8'>

            <div>
                <img src={data?.thumbnail?.secure_url} alt="Course Thumbnail" className="w-full h-[20vh] sm:h-[25vh] rounded-tr-lg group-hover:scale-105 transition-all ease-in-out duration-300" />

                <div className="p-3 space-y-1 text-white">
                    <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
                        {data?.title}
                    </h2>
                    <p className="line-clamp-2">
                        {data?.description}
                    </p>

                    <div className=' flex flex-col'>
                        <p className="font-semibold">
                            <span className="text-cyan-300 font-bold">Category : </span>
                            {data?.category}
                        </p>
                        <p className="font-semibold">
                            <span className="text-cyan-300 font-bold">Total Lectures : </span>
                            {data?.numberOfLectures}
                        </p>
                        <p className="font-semibold">
                            <span className="text-cyan-300 font-bold">Instructor : </span>
                            {data?.createdBy}
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CourseCard