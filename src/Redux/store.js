import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/AuthSlice"
import courseSliceReducer from "./Slices/CourseSlice"
import razorpaySliceReducer from './Slices/RazorpaySlice.js';
import LectureSliceReducer from "./Slices/LectureSlice.js";
import statSliceReducer from './Slices/StatSlice.js'

const store = configureStore(
    {
        reducer:{
            auth:authSliceReducer,
            course:courseSliceReducer,
            razorpay: razorpaySliceReducer,
            lecture:LectureSliceReducer,
            stat:statSliceReducer
        },
        devTools:true
    }
)

export default store;
