import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DoctorRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !gender || !city) {
      showModal("Please Fill Out All Details!", "error");
      return;
    }

    await axios.post("http://localhost:2000/doctorRegister", { name, email, password, gender, city })
      .then((response) => {
        console.log("API Response:", response.data);

        if (response.data.token) {
          console.log("Token Received:", response.data.token);

          localStorage.setItem("doctorToken", response.data.token);
          localStorage.setItem("doctorData", JSON.stringify(response.data.doctor));

          showModal("Account Created Successfully!", "success");

          setTimeout(() => {
            window.open("/DoctorPage", "_blank");
          }, 1500);
        } else {
          showModal(response.data.msg || "Invalid response from server!", "error");
        }
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
            <Link to={"/DoctorSignIn"}>SignIn</Link>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

