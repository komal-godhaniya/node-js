import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {

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
              <Link to={"/Account"}>
                <button className="btn btn-info btn-sm px-4 py-2">Create Account</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active position-relative" data-bs-interval="10000">
            <img src="https://preview.colorlib.com/theme/hospice/img/banner/home.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
              <div className="text-center w-50">
                <h2 className="text-white display-3">We Provide Top Medical Services</h2>
                <p className="text-white">Some representative placeholder content for the first slide.</p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative" data-bs-interval="2000">
            <img src="https://preview.colorlib.com/theme/dentist/img/banner-bg.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
              <div className="text-center w-50">
                <h2 className="text-white display-3">Authentic Dental Service</h2>
                <p className="text-white">Some representative placeholder content for the second slide.</p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative">
            <img src="https://clinicmaster.wprdx.com/pediatrics/wp-content/uploads/2025/01/slide1.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
              <div className="text-center w-50">
                <h2 className="text-white display-3">We care For Your Health Every Moment</h2>
                <p className="text-white">Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" style={{ background: "transparent" }} data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" style={{ background: "transparent" }} data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="icon_div container-fluid py-3">
        <div className="row justify-content-center align-items-center g-3">
          <div className=" col col-md-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
            <img src="https://preview.colorlib.com/theme/medica/img/partners-img/1.png" className="img-fluid" alt="Partner 1" />
          </div>
          <div className=" col col-md-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
            <img src="https://preview.colorlib.com/theme/medica/img/partners-img/2.png" className="img-fluid" alt="Partner 2" />
          </div>
          <div className=" col col-md-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
            <img src="https://preview.colorlib.com/theme/medica/img/partners-img/3.png" className="img-fluid" alt="Partner 3" />
          </div>
          <div className=" col col-md-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
            <img src="https://preview.colorlib.com/theme/medica/img/partners-img/4.png" className="img-fluid" alt="Partner 4" />
          </div>
          <div className=" col col-md-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center align-items-center">
            <img src="https://preview.colorlib.com/theme/medica/img/partners-img/5.png" className="img-fluid" alt="Partner 5" />
          </div>
        </div>
      </div>

      <div className="services py-5">
        <div className="container">
          <center>
            <img src="https://preview.colorlib.com/theme/medica/img/icons/hospital2.png" alt="" className="img-fluid my-3" />
            <h1 className="text-white">Our Services</h1>
          </center>
          <div className="row flex-wrap px-3 py-3 mt-3">
            <div className="col col-4">
              <img src="https://preview.colorlib.com/theme/medica/img/icons/hospital.png" className="img-fluid" alt="" />
              <h3 className="text-white mt-3">Ambulatory Care</h3>
              <p className="text-white lh-base mt-3">Phasellus at nunc orci. Donec ipsum metus, pharetr a quis nunc sit amet, maximus vehicula nibh.</p>
            </div>
            <div className="col col-4">
              <img src="https://preview.colorlib.com/theme/medica/img/icons/blood.png" className="img-fluid" alt="" />
              <h3 className="text-white mt-3">Laboratory</h3>
              <p className="text-white lh-base mt-3">Phasellus at nunc orci. Donec ipsum metus, pharetr a quis nunc sit amet, maximus vehicula nibh.</p>
            </div>
            <div className="col col-4">
              <img src="https://preview.colorlib.com/theme/medica/img/icons/ambulance.png" className="img-fluid" alt="" />
              <h3 className="text-white mt-3">Ambulance Service</h3>
              <p className="text-white lh-base mt-3">Phasellus at nunc orci. Donec ipsum metus, pharetr a quis nunc sit amet, maximus vehicula nibh.</p>
            </div>
            <div className="col col-4">
              <img src="https://preview.colorlib.com/theme/medica/img/icons/nuclear.png" className="img-fluid" alt="" />
              <h3 className="text-white mt-3">Radiology</h3>
              <p className="text-white lh-base mt-3">Phasellus at nunc orci. Donec ipsum metus, pharetr a quis nunc sit amet, maximus vehicula nibh.</p>
            </div>
            <div className="col col-4">
              <img src="https://preview.colorlib.com/theme/medica/img/icons/emergency-call.png" className="img-fluid" alt="" />
              <h3 className="text-white mt-3">Emergency Care</h3>
              <p className="text-white lh-base mt-3">Phasellus at nunc orci. Donec ipsum metus, pharetr a quis nunc sit amet, maximus vehicula nibh.</p>
            </div>
            <div className="col col-4">
              <img src="https://preview.colorlib.com/theme/medica/img/icons/medicine.png" className="img-fluid" alt="" />
              <h3 className="text-white mt-3">Pharmacy </h3>
              <p className="text-white lh-base mt-3">Phasellus at nunc orci. Donec ipsum metus, pharetr a quis nunc sit amet, maximus vehicula nibh.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="doctor_div container">

        <center>
          <h1 className="text-primary mt-3">Our Doctor</h1>
          <p>Meet Our Certified & Experienced Dentist</p>
        </center>

        <div className="row m-3 mt-5 d-flex justify-content-evenly">
          <div className="col col-3 p-0">
            <div>
              <img src="https://themewagon.github.io/dentcare/img/team-1.jpg" alt="" className="img-fluid " />
            </div>
            <center>
              <h3 className="mt-2">Dr. John Doe</h3>
              <h6 className="text-info">Implant Surgeon</h6>
            </center>
          </div>
          <div className="col col-3 p-0">
            <div>
              <img src="https://themewagon.github.io/dentcare/img/team-2.jpg" alt="" className="img-fluid " />
            </div>
            <center>
              <h3 className="mt-2">Dr. John Doe</h3>
              <h6 className="text-info">Implant Surgeon</h6>
            </center>
          </div>
          <div className="col col-3 p-0">
            <div>
              <img src="https://themewagon.github.io/dentcare/img/team-3.jpg" alt="" className="img-fluid " />
            </div>
            <center>
              <h3 className="mt-2">Dr. John Doe</h3>
              <h6 className="text-info">Implant Surgeon</h6>
            </center>
          </div>
          <div className="col col-3 p-0 mt-5 mb-2">
            <div>
              <img src="https://themewagon.github.io/dentcare/img/team-4.jpg" alt="" className="img-fluid " />
            </div>
            <center>
              <h3 className="mt-2">Dr. John Doe</h3>
              <h6 className="text-info">Implant Surgeon</h6>
            </center>
          </div>
          <div className="col col-3 p-0 mt-5 mb-2">
            <div>
              <img src="https://themewagon.github.io/dentcare/img/team-5.jpg" alt="" className="img-fluid " />
            </div>
            <center>
              <h3 className="mt-2">Dr. John Doe</h3>
              <h6 className="text-info">Implant Surgeon</h6>
            </center>
          </div>
        </div>
      </div>

      <footer className="d-flex justify-content-center align-items-center">
        <div className="row w-75">
          <div className="col col-12">
            <center>

              <h3 className="text-white">Follow Us On </h3>

              <button className="m-2">
                <i class="ri-twitter-fill text-white h5"></i>
              </button>
              <button className="m-2">
                <i class="ri-instagram-fill text-white h5"></i>
              </button>
              <button className="m-2">
                <i class="ri-facebook-fill text-white h5"></i>
              </button>
              <button className="m-2">
                <i class="ri-youtube-fill text-white h5"></i>
              </button>

              <hr />

              <h6 className="text-white my-2">© Your Site Name. All Rights Reserved.Designed by HTML Codex</h6>
            </center>
          </div>
        </div>
      </footer>

    </>
  )
}
