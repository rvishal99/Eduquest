import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import { getAllCourses } from '../../Redux/Slices/CourseSlice';
import HomeLayout from '../../Layouts/HomeLayout.jsx';
import CourseCard from '../../components/CourseCard.jsx';
import Footer from '../../components/Footer.jsx';
import { AiOutlineArrowLeft } from "react-icons/ai";

const CourseList = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();



    const { courseData } = useSelector((state) => state.course)

    // //console.log(typeof courseData)
    async function loadCourses() {
        await dispatch(getAllCourses());
    }
    useEffect(() => {
        loadCourses()
    }, [])


    return (
        <>
            <Link className="absolute top-8 link text-3xl text-accent cursor-pointer" onClick={() => navigator(-1)}>
                <AiOutlineArrowLeft />
            </Link>
            <div className="min-h-[90vh] p-5 flex flex-col gap-10 text-white">
                <h1 className='text-center text-2xl sm:text-3xl font-semibold mb-5'>
                    Explore the courses made by

                    <span className='font-bold text-yellow-500'>
                        Industry experts
                    </span>
                </h1>
                <div className="flex flex-wrap gap-5 justify-around">
                    {
                        courseData?.map((element) => {
                            return <CourseCard key={element._id} data={element} />
                        })
                    }
                </div>
            </div>
            <Footer />
        </>

    )
}

export default CourseList