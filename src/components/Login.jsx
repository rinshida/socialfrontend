import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const submit = async(e)=>{
         e.preventDefault()
        console.log(email,password)
       

  
        const response = await axios.post("https://socialbackend-gxmb.onrender.com/api/login",{email,password})
        if(response.status==200){
            console.log("data sented successfully")

            //  window.alert("Registered successfully")
            console.log(response.data.token)
            //localStorage.setItem('id',response.data.data._id)
            localStorage.setItem('id',response.data.token)
            window.alert("Login successfull")
            console.log(response)
            navigate('/posts')
        }else{
          window.alert("incorrect password")
            console.log(response)
        }
     
    }
    const conformPassword = (pass)=>{
      if(password !== pass){

           window.alert("incorrect password")
      }
    }
    
  return (
    <div className=' w-screen h-screen flex flex-col items-center justify-center gap-3 bg-blue-950'>
      <h1 className=' text-2xl font-black text-white'>LOGIN</h1>
        <div>
          <form  onSubmit={submit} className=' flex flex-col gap-2 justify-center border p-5 bg-gray-300'>
            <label className=' font-bold'>Email : </label>
            <input className=' border border-white bg-white' type="email" name="" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
            <label className=' font-bold'>Password : </label>
            <input className=' border border-white bg-white' type="password" name=""onChange={(e)=>setPassword(e.target.value)} value={password}/>
               <label className=' font-bold'>Conform Password : </label>
            <input className=' border border-white bg-white' type="password" name=""onChange={(e)=>conformPassword(e.target.value)} value={password}/>
            <button type='submit' className=' bg-blue-800 text-white px-4 py-2'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Login