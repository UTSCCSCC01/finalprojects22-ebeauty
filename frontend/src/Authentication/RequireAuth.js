import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Authentication/useAuth";

// https://www.youtube.com/watch?v=27KeYk-5vJw&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=5&ab_channel=DaveGray
const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log("auth", auth);
    console.log(auth?.role?.find(r => allowedRoles?.includes(r)))

    return (
        auth?.role?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : (<Navigate to="/login" state={{ from: location }} replace />)
    );
}

export default RequireAuth;