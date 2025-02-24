import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PatientSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modal, setModal] = useState({ show: false, message: "", type: "" });

    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        if (!email || !password) {
            showModal("Please fill both details", "error");
            return;
        }

        axios.post("http://localhost:2000/patientLogin", { email, password })
            .then(response => {
                console.log("Server Response: ", response.data);

                if (response.data.token) {
                    localStorage.setItem("patientToken", response.data.token);
                    localStorage.setItem("patientData" , JSON.stringify(response.data.patient))
                    showModal("Login Successfully!", "success");

                    setTimeout(() => {
                        navigate("/PatientPage");
                    }, 1500);
                } else {
                    showModal(response.data.msg || "Login Failed!", "error");
                }
            })
            .catch(() => {
                showModal("Something went wrong!", "error");
            });
    };

    const showModal = (message, type) => {
        setModal({ show: true, message, type });
        setTimeout(() => {
            setModal({ show: false, message: "", type: "" });
        }, 1000);
    };

    return (
        <div className="main">
            {modal.show && (
                <div className={`modal ${modal.type}`}>
                    <div className="modal-content">
                        <p>{modal.message}</p>
                    </div>
                </div>
            )}

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
                        {/* <a href="">Forgot Password ?</a> */}
                    </div>
                    <input type="submit" id="submit" value="Login" />
                    <h5 style={{ margin: "10px", color: "white" }}>Or</h5>
                    <Link to={"/PatientRegister"}>
                        <button type="button">Create Account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
