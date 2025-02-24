import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !gender || !city) {
            alert("Please Fill Out All Details!");
            return;
        }

        axios.post("http://localhost:3000/Register", { name, email, password, gender, city })
            .then(() => {
                alert("Account Created Successfully!");
                setTimeout(() => {
                    navigate("/Dashboard")
                }, 1500);
            })
    };

    return (
        <div className="main">
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
                        <Link to={"/"}>SignIn</Link>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    );
}
