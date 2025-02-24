import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyAppoiment() {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("patientToken");
        const patientData = localStorage.getItem("patientData");

        if (!token) {
            navigate('/PatientSignIn');
        } else if (patientData) {
            setPatient(JSON.parse(patientData));
        }
    }, [navigate]);

    useEffect(() => {

        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        setAppointments(storedAppointments);
    }, []);

    const handleDash = () => {
        navigate("/PatientPage");
    };

    const handleProfile = () => {
        navigate("/Profile");
    };

    const handleLogout = () => {
        localStorage.removeItem("patientToken")
        localStorage.removeItem("patientData")
        // navigate('/PatientSignIn')
        navigate("/")
    }

    const handleDelete = (index) => {

        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

        storedAppointments.splice(index, 1);

        localStorage.setItem("appointments", JSON.stringify(storedAppointments));

        setAppointments(storedAppointments);
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
                                    <li><button className="dropdown-item" type="button" onClick={handleProfile}>Profile</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={handleLogout}>Log Out</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                {appointments.length > 0 ? (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className='text-center'>Doctor</th>
                                <th className='text-center'>Name</th>
                                <th className='text-center'>specialist </th>
                                <th className='text-center'>Time</th>
                                <th className='text-center'>Date</th>
                                <th className='text-center'>Actons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <tr key={index}>
                                    <td className='text-center'>
                                        <center>
                                            <img src={appointment.doctorImage} alt="Doctor" className="img-fluid" style={{ width: "60px", height: "60px" }} />
                                        </center>
                                    </td>
                                    <td className='text-center'>{appointment.doctorName}</td>
                                    <td className='text-center'>{appointment.doctorRole}</td>
                                    <td className='text-center'>{appointment.time}</td>
                                    <td className='text-center'>{appointment.date}</td>
                                    <td>
                                        <center>
                                            <button className="btn btn-danger w-50" onClick={() => handleDelete(index)}>
                                                <i class="ri-delete-bin-6-line"></i>
                                            </button>
                                        </center>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="table_text">
                        <i className="ri-file-warning-line display-3 opacity-25"></i>
                        <h1 className='opacity-25'>No Appointment!</h1>
                    </div>
                )}
            </div >
        </>
    );
}