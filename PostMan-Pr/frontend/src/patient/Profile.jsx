import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const navigate = useNavigate();
    const [patient, setPatient] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("patientToken");
        const patientData = localStorage.getItem("patientData");

        if (!token) {
            navigate('/PatientSignIn');
        } else if (patientData) {
            setPatient(JSON.parse(patientData));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("patientToken")
        localStorage.removeItem("patientData")
        // navigate('/PatientSignIn')
        navigate("/")
    }

    const handleDash = () => {
        navigate("/PatientPage");
    }

    const handleAppoinment = () => {
        navigate("/MyAppoiment")
    }

    const handleEdit = () => setIsEditing(true);

    const handleChange = (e) => {
        setPatient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSave = async () => {
        console.log("Patient data before update:", patient);

        const patientId = patient._id || patient.id; 

        if (!patientId) {
            console.error("Invalid patient data:", patient);
            return;
        }

        const response = await fetch(`http://localhost:2000/updatepatient/${patientId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patient),
        });

        if (!response.ok) {
            console.error("Failed to update patient:", response.statusText);
            return;
        }

        const data = await response.json();

        if (data.patient) {
            setPatient(data.patient);
            localStorage.setItem("patientData", JSON.stringify(data.patient));
            setIsEditing(false);
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow-sm py-3">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://preview.colorlib.com/theme/medica/img/core-img/logo.png" alt="Logo" className="img-fluid" style={{ maxHeight: "40px" }} />
                    </a>

                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item ms-4">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                        </ul>

                        <div className="d-flex justify-content-center">
                            <div className="dropdown">
                                {patient ? (
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={`http://localhost:2000/uploads/${patient.image}`} alt="Patient Profile" className="img-fluid me-3" />
                                        <span className='me-3'>{patient.name}</span>
                                    </button>
                                ) : (
                                    <h5>Loading...</h5>
                                )}
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button" onClick={handleDash}>Dashboard</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={handleAppoinment}>My Appointment</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={handleLogout}>Log Out</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container main_profile">
                {patient ? (
                    <div className="row w-75">
                        <div className="col col-4 d-flex justify-content-center align-items-center">
                            <img src={`http://localhost:2000/uploads/${patient.image}`} className='img-fluid' alt="" />
                        </div>

                        <div className="col col-8">
                            <center className='my-4'>
                                <h1 className='text-primary'>Patient Details</h1>
                            </center>
                            <div className='ms-5 mt-3 p-2'>
                                {isEditing ? (
                                    <>
                                        <input type="text" name="name" className="form-control mb-2" value={patient.name} onChange={handleChange} />
                                        <input type="email" name="email" className="form-control mb-2" value={patient.email} onChange={handleChange} />
                                        <input type="text" name="phone" className="form-control mb-2" value={patient.phone} onChange={handleChange} />
                                        <input type="text" name="gender" className="form-control mb-2" value={patient.gender} onChange={handleChange} />
                                        <input type="text" name="city" className="form-control mb-2" value={patient.city} onChange={handleChange} />
                                        <button className='btn btn-success w-25 mt-3' onClick={handleSave}>Update</button>
                                    </>
                                ) : (
                                    <>
                                        <h5>Name : {patient.name}</h5>
                                        <h5>Email : {patient.email}</h5>
                                        <h5>Gender : {patient.gender}</h5>
                                        <h5>Phone Number : {patient.phone}</h5>
                                        <h5>City : {patient.city}</h5>
                                        <button className='btn btn-info w-25 my-3' onClick={handleEdit}>Edit</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}
