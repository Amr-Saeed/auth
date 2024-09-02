import React from "react";
import { useNavigate } from "react-router-dom";
export default function HomePage({token}) {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/"); //go to login page again
    }
    return (
        <div>
            <h1>Welcome Back, {token.user.user_metadata.full_name}</h1>
            <button onClick={handleLogout}>Sign Out</button>
        </div>
    );
}