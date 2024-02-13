import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminCheck = () => {
    const { isLoggedIn, isAdmin } = useSelector((state) => state.auth);

    //console.log("isAdmin: ",isAdmin)
    return isLoggedIn && isAdmin ? (
        <Outlet />
    ) : isLoggedIn ? (<Navigate to="/denied" />) : (<Navigate to="login" />)
};

const LoggedInFunc=()=> {
    const { isLoggedIn } = useSelector((state) => state.auth);

    return isLoggedIn ? (<Outlet />) : (<Navigate to="login" />)
}



export { AdminCheck, LoggedInFunc};