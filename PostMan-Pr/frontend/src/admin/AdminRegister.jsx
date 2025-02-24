import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    // const [image, setImage] = useState("")
    const [modal, setModal] = useState({ show: false, message: "", type: "" });

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !gender || !city) {
            showModal("Please Fill Out All Details!", "error");
            return;
        }

        axios.post("http://localhost:2000/adminRegister", { name, email, password, gender, city })
            .then(() => {
                showModal("Account Created Successfully!", "success");

                setTimeout(() => {
                    window.open("/AdminPage", "_blank");
                }, 1500);
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
                <form onSubmit={handleRegister}>
                    <h2>Create account</h2>
                    <div className="inputBox">
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        <span>User Name</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span>Password</span>
                    </div>
                    {/* <div className="inputBox">
                        <input type="file" name="image" value={image} onChange={(e) => setPassword(e.target.value)} required />
                        <span>Password</span>
                    </div> */}

                    <div className="inputBox">
                        <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="inputBox">
                        <select name="city" value={city} onChange={(e) => setCity(e.target.value)} required>
                            <option value="">City</option>
                            <option value="Rajkot">Rajkot</option>
                            <option value="Baroda">Baroda</option>
                            <option value="GandhiNagar">GandhiNagar</option>
                        </select>
                    </div>
                    <div className="links">
                        <a href="#">Forgot Password?</a>
                        <Link to={"/AdminSignIn"}>SignIn</Link>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    );
}
