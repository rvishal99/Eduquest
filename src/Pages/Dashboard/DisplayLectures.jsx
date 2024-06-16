import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { deleteCourseLecture, getCourseLectures } from "../../Redux/Slices/LectureSlice";
import { FaCirclePlay } from "react-icons/fa6";


function Displaylectures() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { lectures } = useSelector((state) => state.lecture);
    const { isAdmin } = useSelector((state) => state.auth);

    const [currentVideo, setCurrentVideo] = useState(0);

    async function onLectureDelete(courseId, lectureId) {
        //console.log(courseId, lectureId);
        await dispatch(deleteCourseLecture({ courseId: courseId, lectureId: lectureId }));
        await dispatch(getCourseLectures(courseId));
    }



    useEffect(() => {
        //console.log(state);

        if (!state) navigate("/courses");
        // console.log(state._id)
        dispatch(getCourseLectures(state._id));
    }, []);


    return (
        <HomeLayout>
            <div className="mt-3 text-center text-4xl font-semibold text-cyan-500">
                {state?.title}
            </div>
            <div className="min-h-[90vh] py-10 text-white mx-[3%] sm:mx-[5%]">
                {(lectures && lectures.length > 0) ? (
                    <div className="flex flex-col sm:flex-row justify-center gap-10 w-full">
                        {/* left section for playing videos and displaying course details to admin */}
                        <div className="sticky top-0 sm:relative space-y-5 w-full sm:w-2/3 p-2 rounded-lg shadow-[0_0_10px_black] h-[max-content]">
                            <video
                                src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                                className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                                controls
                                disablePictureInPicture
                                controlsList="nodownload"

                            >
                            </video>

                            <div>
                                <h1 className="font-semibold text-cyan-400 text-xl">
                                    {lectures && lectures[currentVideo]?.title}
                                </h1>
                                <p className="line-clamp-4">

                                    {lectures && lectures[currentVideo]?.description}
                                </p>
                            </div>
                        </div>

                        {/* right section for displaying list of lectres */}
                        <ul className="w-full sm:w-1/3 p-2 rounded-lg shadow-[0_0_10px_black] space-y-4 h-[75vh]">
                            <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                                <p>Lectures list</p>
                                {isAdmin && (
                                    <button onClick={() => navigate("/course/addlecture", { state: { ...state } })} className="btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                                        Add new lecture
                                    </button>
                                )}
                            </li>
                            {/* {console.log(lectures)} */}
                            {lectures &&
                                lectures.map((lecture, idx) => {
                                    return (
                                        <li className="space-y-2" key={lecture._id} >
                                            <p className="cursor-pointer text-lg" onClick={() => setCurrentVideo(idx)}>
                                                <span className="flex items-center gap-2 mx-2">

                                                    <FaCirclePlay />

                                                    {" "} Lecture {idx + 1} : {" "}

                                                    {lecture?.title}
                                                </span>
                                            </p>
                                            {isAdmin && (
                                                <button onClick={() => onLectureDelete(state?._id, lecture?._id)} className="btn-accent px-2 py-1 rounded-md font-semibold text-sm">
                                                    Delete lecture
                                                </button>
                                            )}
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>) : (
                    isAdmin && (
                        <button onClick={() => navigate("/course/addlecture", { state: { ...state } })} className="btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                            Add new lecture
                        </button>
                    )
                )}
            </div>
        </HomeLayout>
    );
}

export default Displaylectures;