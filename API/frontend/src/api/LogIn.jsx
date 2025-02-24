import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill both details");
            return;
        }

        axios.post("http://localhost:3000/Login", { email, password })
            .then(response => {
                console.log("Server Response: ", response.data);

                if (response.data.token) {
                    localStorage.setItem("adminToken", response.data.token);
                    alert("Login Successfully!");

                    navigate("/Dashboard");
                } else {
                    alert(response.data.msg || "Login Failed!");
                }
            })
            .catch(() => {
                alert("Something went wrong!");
            });
    };

    return (
        <div className="main">
            <div className="box">
                <form onSubmit={handleSignIn}>
                    <h2>Sign in</h2>
                    <div className="inputBox">
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span>Password</span>
                    </div>
                    <div className="links">
                    </div>
                    <input type="submit" id="submit" value="Login" />
                    <h5 style={{ margin: "10px", color: "white" }}>Or</h5>
                    <Link to={"/Register"}>
                        <button type="button">Create Account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
