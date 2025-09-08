import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp,setOtp] = useState("")
   const navigate = useNavigate();

    const submit = async(e)=>{
         e.preventDefault()
        console.log(otp)
       
  
        const response = await axios.post("https://socialbackend-gxmb.onrender.com/api/otpverification",{OTP:otp})
        if(response.status==200){
            console.log("otp sented successfully")
            window.alert("email verified")
            console.log(response)
             navigate('/signup')
        }else{
          window.alert("email is not verified ,try again")
            console.log(response)
        }
     
    }
   
    
  return (
    <div className=' w-screen h-screen flex flex-col items-center justify-center gap-3 bg-blue-950'>
      <h1 className=' text-2xl font-black text-white'>OTP verification</h1>
        <div>
          <form  onSubmit={submit} className=' flex flex-col gap-2 justify-center border p-5 bg-gray-300'>
            <label className=' font-bold'>OTP : </label>
            <input className=' border border-white bg-white' type="number" name="" onChange={(e)=>setOtp(e.target.value)}  value={otp}/>
            <button type='submit' className=' bg-blue-800 text-white px-4 py-2'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default OtpVerification