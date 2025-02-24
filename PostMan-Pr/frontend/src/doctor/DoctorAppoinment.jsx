import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DoctorAppoinment() {

  const navigate = useNavigate("")

  const handleLogout = () => {
    navigate("/")
  }

  const handleDash = () => {
    navigate("/DoctorPage")
  }

  const handleProfile = () => {
    navigate("/DoctorProfile")
  }

  return (
    <>
      <div className="Doctor_main container-fluid">
        <div className="row">
          <div className="col col-2">
            <img src="https://preview.colorlib.com/theme/medica/img/core-img/logo.png" alt="" className="img-fluid m-3 w-75" />
            
            <ul className='mt-4'>
              <li className='p-3 mt-3 fs-5'  onClick={handleDash}> <i class="ri-dashboard-line p-3"></i>Dashboard</li>
              <li className='p-3 mt-3 fs-5'> <i class="ri-file-add-line p-3"></i> Appoinment</li>
              <li className='p-3 mt-3 fs-5' onClick={handleProfile}><i class="ri-file-user-line p-3"></i>Profile</li>
            </ul>

          </div>
          <div className="col col-10 d-flex flex-column">
            <nav className='d-flex justify-content-end mt-3 pb-3'>
              <button className='btn btn-info' onClick={handleLogout}>Log Out</button>
            </nav>

            <div className='border border-3 d-flex justify-content-between flex-column'>
              <h5 className='m-3 text-primary'><span className='text-secondary'>Doctor / </span> Appoinment</h5>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
