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
import ProtectedRoute from './components/ProtectedRoute'
import LayoutWithNavbar from './components/LayoutWithNavbar'
import PublicRoute from './components/PublicRoute'

const App = () => {
  return (
    <div className='w-screen overflow-hidden'>
      {/* <Navebar/> */}
      <Routes>
        <Route  path='/signup' element={<PublicRoute><Signup/></PublicRoute>} />
        <Route  path='/' element={<PublicRoute><Login/></PublicRoute>} />
        <Route  path='/login' element={<PublicRoute><Login/></PublicRoute>} />
        {/* <Route  path='/verification' element={<PublicRoute><EmailVerification/></PublicRoute>} /> */}
        <Route  path='/otp' element={<PublicRoute><OtpVerification/></PublicRoute>} />
        
        <Route  path='/posts' element={<ProtectedRoute><LayoutWithNavbar><Posts/></LayoutWithNavbar></ProtectedRoute>} />
        <Route  path='/post' element={<ProtectedRoute><LayoutWithNavbar><Post/></LayoutWithNavbar></ProtectedRoute>} />
        <Route  path='/add' element={<ProtectedRoute><LayoutWithNavbar><AddPost/></LayoutWithNavbar></ProtectedRoute>} />
        

      </Routes>
    </div>
  )
}

export default App