import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import Post from './components/Post'
import EmailVerification from './components/EmailVerification'
import OtpVerification from './components/OtpVerification'
import Navebar from './components/Navebar'

const App = () => {
  return (
    <div className='w-screen overflow-hidden'>
      <Navebar/>
      <Routes>
        <Route  path='/signup' element={<Signup/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/posts' element={<Posts/>} />
        <Route  path='/post' element={<Post/>} />
        <Route  path='/' element={<EmailVerification/>} />
        <Route  path='/otp' element={<OtpVerification/>} />
        <Route  path='/add' element={<AddPost/>} />
      </Routes>
    </div>
  )
}

export default App