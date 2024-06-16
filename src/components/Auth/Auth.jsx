// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";

// export const AdminCheck = () => {
//     const { isLoggedIn, isAdmin } = useSelector((state) => state.auth);

//     //console.log("isAdmin: ",isAdmin)
//     return isLoggedIn && isAdmin ? (
//         <Outlet />
//     ) : isLoggedIn ? (<Navigate to="/denied" />) : (<Navigate to="login" />)
// };

// expoart const LoggedInFunc=()=> {
//     const { isLoggedIn } = useSelector((state) => state.auth);

//     return isLoggedIn ? (<Outlet />) : (<Navigate to="login" />)
// };