import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './api/Register'
import LogIn from './api/LogIn'
import Dashboard from './api/Dashboard'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn/>}></Route>
        <Route path='/Register' element = {<Register/>}></Route>
        <Route path='/Dashboard' element = {<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
