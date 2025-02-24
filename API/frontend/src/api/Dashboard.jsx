import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const navigate = useNavigate("")

  const handleHome = () => {
    navigate("/")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            DashBoard
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
              <button className="btn btn-info btn-sm px-4 py-2" onClick={handleHome}>Log Out</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid" id='account_main_div'>
        
        <div>
            <input type="text" placeholder='Enter Your Task'/>
            <select name="" id="">
              <option value="">Priority</option>
              <option value="">High</option>
              <option value="">Low</option>
            </select>
            <button>Add</button>
        </div>

     
      </div>
    </>
  )
}
