import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PatientRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [modal, setModal] = useState({ show: false, message: "", type: "" });

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !image || !phone || !gender || !city) {
            showModal("Please Fill Out All Details!", "error");
            return;
        }
        if (phone.length !== 10) {
            alert("Phone number must be 10 digits!");
            return;
        }        

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("image", image);
        formData.append("phone", phone)
        formData.append("gender", gender);
        formData.append("city", city);

        axios.post("http://localhost:2000/patientRegister", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then((response) => {
                console.log("API Response:", response.data)

                if (response.data.token) {

                    console.log("Token Received:", response.data.token);

                    localStorage.setItem("patientToken", response.data.token);
                    localStorage.setItem("patientData", JSON.stringify(response.data.patient));

                    showModal("Registration Successful!", "success");

                    setTimeout(() => {
                        navigate("/PatientPage");
                    }, 1500);
                } else {
                    showModal(response.data.msg || "Registration Failed!", "error");
                }
            })
            .catch((error) => {
                console.error("API Error:", error.response?.data || error);
                showModal("Something went wrong!", "error");
            });

    }

    const showModal = (message, type) => {
        setModal({ show: true, message, type });
        setTimeout(() => {
            setModal({ show: false, message: "", type: "" });
        }, 1000);
    }

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
                    <div className="inputBox">
                        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
                    </div>
                    <div className="inputBox">
                        <input type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        <span>Phone Number</span>
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
                        <Link to={"/PatientSignIn"}>Sign In</Link>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    )
}
