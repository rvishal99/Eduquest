import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList.jsx'
import Contact from './Pages/Contact.jsx'
import Denied from './Pages/Denied.jsx'
import CourseDescription from './Pages/Course/CourseDescription.jsx'
import CreateCourse from './Pages/Course/CreateCourse.jsx'
import Profile from './Pages/User/Profile.jsx'
import EditProfile from './Pages/User/EditProfile.jsx'
import Checkout from './Pages/Payment/Checkout';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
import CheckoutFailure from './Pages/Payment/CheckoutFailure';

import Displaylectures from './Pages/Dashboard/DisplayLectures.jsx';
import AddLecture from './Pages/Dashboard/Addlecture.jsx';

import AdminDashboard from './Pages/Dashboard/AdminDashboard';

import ForgotPassword from './Pages/ForgotPassword.jsx'
import ResetPassword from './Pages/ResetPassword.jsx'
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function App() {
  
  const AdminCheck = () => {
    const { isLoggedIn, isAdmin } = useSelector((state) => state.auth);

    //console.log("isAdmin: ",isAdmin)
    return isLoggedIn && isAdmin ? (
      <Outlet />
    ) : isLoggedIn ? (<Navigate to="/denied" />) : (<Navigate to="login" />)
  };

  const LoggedInFunc = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    return isLoggedIn ? (<Outlet />) : (<Navigate to="login" />)
  }


  return (
    <>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:resetIdEmail" element={<ResetPassword />} />

        <Route path="/course/description" element={<CourseDescription />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />


        <Route element={< AdminCheck />}>
          <Route path="/course/create" element={<CreateCourse />} />
          <Route path="/course/addlecture" element={<AddLecture />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        <Route element={<LoggedInFunc />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/editprofile' element={<EditProfile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
          <Route path='/checkout/fail' element={<CheckoutFailure />} />
          <Route path='/course/displaylectures' element={<Displaylectures />} />
        </Route>

        <Route path="*" element={<NotFound />} />



      </Routes>
    </>
  )
}

export default App
