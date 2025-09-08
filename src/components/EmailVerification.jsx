import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
const [email,setEmail] = useState("")
   const navigate = useNavigate();

    const submit = async(e)=>{
         e.preventDefault()
        // console.log(otp)
       
  
        const response = await axios.post("http://localhost:5000/api/otp",{email})
        if(response.status==200){
            console.log("otp sented successfully")
            window.alert("otp has sented")
            console.log(response)
            navigate('/otp')
        }else{
          window.alert("email hasn't sented ,try again")
            console.log(response)
        }
     
    }
   
    
  return (
    <div className=' w-screen h-screen flex flex-col items-center justify-center gap-3 bg-blue-950'>
      <h1 className=' text-2xl font-black text-white'>Email Verification</h1>
        <div>
          <form  onSubmit={submit} className=' flex flex-col gap-2 justify-center border p-5 bg-gray-300'>
            <label className=' font-bold'>Enter your email : </label>
            <input className=' border border-white bg-white' type="email" name="" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
            <button type='submit' className=' bg-blue-800 text-white px-4 py-2'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default EmailVerification