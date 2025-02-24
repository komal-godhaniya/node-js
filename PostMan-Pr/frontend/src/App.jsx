import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Account from './component/Account'
import AdminRegister from './admin/AdminRegister'
import AdminSignIn from './admin/AdminSignIn'
import AdminPage from './admin/AdminPage'
import DoctorSignIn from './doctor/DoctorSignIn'
import DoctorRegister from './doctor/DoctorRegister'
import DoctorPage from './doctor/DoctorPage'
import PatientSignIn from './patient/PatientSignIn'
import PatientRegister from './patient/PatientRegister'
import PatientPage from './patient/PatientPage'
import Profile from './patient/Profile'
import MyAppoiment from './patient/MyAppoiment'
import DoctorAppoinment from './doctor/DoctorAppoinment'
import DoctorProfile from './doctor/DoctorProfile'
import Appoinment from './admin/Appoinment'
import AddDoctor from './admin/AddDoctor'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Account' element={<Account/>}></Route>
          
          {/* Admin */}

          <Route path='AdminSignIn' element={<AdminSignIn/>}></Route>
          <Route path='/AdminRegister' element={<AdminRegister/>}></Route>
          <Route path='/AdminPage' element={<AdminPage/>}></Route>
          <Route path='/Appoinment' element={<Appoinment/>}></Route>  
          <Route path='/DoctorList' element={<DoctorList/>}></Route>  
          <Route path='/AddDoctor' element={<AddDoctor/>}></Route>  


          {/* Doctor  */}

          <Route path='/DoctorSignIn' element={<DoctorSignIn/>}></Route>
          <Route path='/DoctorRegister' element={<DoctorRegister/>}></Route>
          <Route path='/DoctorPage' element={<DoctorPage/>}></Route>
          <Route path='/DoctorAppoinment' element={<DoctorAppoinment/>}></Route>
          <Route path='/DoctorProfile' element={<DoctorProfile/>}></Route>

          {/* Patient */}

          <Route path='/PatientSignIn' element={<PatientSignIn/>}></Route>
          <Route path='/PatientRegister' element={<PatientRegister/>}></Route>
          <Route path='/PatientPage' element={<PatientPage/>}></Route>

          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/MyAppoiment' element={<MyAppoiment/>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}
