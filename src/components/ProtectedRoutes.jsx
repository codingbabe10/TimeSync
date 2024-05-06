import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/UserContext";

export default function ProtectedRoutes() {
    const { user } = useContext(Context);

    return (
        user ? <Outlet /> : <Navigate to="/signin" />
    )
    
}