import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CreateContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(CreateContext);
    const location = useLocation();
    console.log(loader);
    console.log(user);

    if (loader) {
        return <div className="h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg text-white"></span></div>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;