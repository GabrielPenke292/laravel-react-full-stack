import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

// Outlet is the place where the child will be rendered
const GuestLayout = () => {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
