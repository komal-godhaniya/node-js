import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Account() {

  const navigate = useNavigate("")

  const handleHome = () => {
    navigate("/")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow-sm">
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
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#">
                  Pages
                </a>
              </li>
            </ul>

            <div className="d-flex justify-content-center">
              <button className="btn btn-info btn-sm px-4 py-2" onClick={handleHome}>Back To Home</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid" id='account_main_div'>
        <h1 className='text-white  display-2'>Choose Your Role</h1>
        <p className='text-white lh-base w-50 text-center'>Lorem ipsum dolor sit amet re rem pudiandae neque sit deserunt expedita eos possimus, obcaecati assumenda. Incidunt, laboriosam?</p>
        <div className='row child_div mt-5 d-flex justify-content-evenly'>

          <div className="col col-3">
            <div className='img_div'>
              <img src="/img_ (3).jpg" className='img-fluid' alt="" />
            </div>
            <Link to={"/AdminSignIn"}>
              <button className='btn btn-light mt-3'>
                <h4 className='fs-6 text-center mt-1'>Log In As A Admin </h4>
              </button>
            </Link>
          </div>

          <div className="col col-3">
            <div className='img_div'>
              <img src="/img_ (2).jpg" className='img-fluid' alt="" />
            </div>
            <Link to={"/DoctorSignIn"}>
              <button className='btn btn-light mt-3'>
                <h4 className='fs-6 text-center mt-1'>Log In As A Doctor </h4>
              </button>
            </Link>
          </div>

          <div className="col col-3">
            <div className="img_div">
              <img src="/img_ (1).jpg" className='img-fluid' alt="" />
            </div>
            <Link to={"/PatientSignIn"}>
              <button className='btn btn-light mt-3'>
                <h4 className='fs-6 text-center mt-1'>Log In As A Patient </h4>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
