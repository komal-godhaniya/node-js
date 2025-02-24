import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DoctorProfile() {
    const [doctor, setDoctor] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("doctorToken");
        localStorage.removeItem("doctorData");
        navigate("/");
    };

    const handleDash = () => {
        navigate("/DoctorPage");
    };

    const handleAppointment = () => {
        navigate("/DoctorAppointment");
    };

    useEffect(() => {
        const token = localStorage.getItem("doctorToken");
        const doctorData = localStorage.getItem("doctorData");

        if (!token) {
            navigate("/DoctorSignIn");
        } else if (doctorData) {
            setDoctor(JSON.parse(doctorData));
        }
    }, [navigate]);

    return (
        <>
            <div className="Doctor_main container-fluid">
                <div className="row">
                    <div className="col col-2">
                        <img src="https://preview.colorlib.com/theme/medica/img/core-img/logo.png" alt="" className="img-fluid m-3 w-75" />

                        <ul className='mt-4'>
                            <li className='p-3 mt-3 fs-5' onClick={handleDash}> <i className="ri-dashboard-line p-3"></i>Dashboard</li>
                            <li className='p-3 mt-3 fs-5' onClick={handleAppointment}> <i className="ri-file-add-line p-3"></i> Appointment</li>
                            <li className='p-3 mt-3 fs-5'><i className="ri-file-user-line p-3"></i>Profile</li>
                        </ul>
                    </div>
                    <div className="col col-10 d-flex flex-column">
                        <nav className='d-flex justify-content-end mt-3 pb-1'>
                            <button className='btn btn-info' onClick={handleLogout}>Log Out</button>
                        </nav>

                        <div className='d-flex justify-content-between flex-column'>
                            <h5 className='m-3 text-primary'><span className='text-secondary'>Doctor / </span> Profile</h5>

                            <div className='Doctor_profile'>
                                <section>
                                    <div className="box1 box my-5">
                                        <div className="content">
                                            <div className="image">
                                                <img src="https://img.freepik.com/premium-photo/3d-render-man-doctor-avatar-round-sticker-with-cartoon-character-face-user-id-thumbnail-modern_1181551-95.jpg" alt="Profile Image" />
                                            </div>
                                            <div className="level">
                                                <p>PRO</p>
                                            </div>
                                            <div className="text">
                                                {doctor ? (
                                                    <>
                                                        <p className="name">{doctor.name}</p>
                                                        <p className="job_title">{doctor.email}</p>
                                                        <p className="job_description">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque, ipsam a amet laboriosam eligendi.
                                                        </p>
                                                    </>
                                                ) : (
                                                    <p>Loading doctor profile...</p>
                                                )}
                                            </div>
                                            <div className="icons">
                                                <button><ion-icon name="logo-dribbble"></ion-icon></button>
                                                <button><ion-icon name="logo-instagram"></ion-icon></button>
                                                <button><ion-icon name="logo-twitter"></ion-icon></button>
                                                <button><ion-icon name="logo-linkedin"></ion-icon></button>
                                                <button><ion-icon name="logo-facebook"></ion-icon></button>
                                                <button><ion-icon name="logo-behance"></ion-icon></button>
                                            </div>
                                            <div className="button">
                                                <div>
                                                    <button className="connect" type="button">Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
