import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [image,setImage] = useState("")

    const navigate = useNavigate();

    const submit = async(e)=>{
         e.preventDefault()
        console.log(name,email,password,image)

        const toBase64 = file => new Promise((resolve,reject)=>{
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = reject 
        })

        let Base64File = await toBase64(image)
    
       
  try{
        const response = await axios.post("https://socialbackend-gxmb.onrender.com/api/register",{name,email,password,profile:Base64File})
        if(response.status == 200){
            console.log("data sented successfully")
            window.alert("Registered successfully")
            console.log(response.data.token)
            //localStorage.setItem('id',response.data.data._id)
            localStorage.setItem('id',response.data.token)
            navigate('/posts')
            
        }else{
          console.log("error")
        }
      }catch(err){
        console.log(err)
      }
}
    
  return (
    <div className=' w-screen h-screen flex flex-col items-center justify-center gap-3 bg-blue-950'>
      <h1 className=' text-2xl font-black text-white'>SIGNUP</h1>
        <div>
          <form  onSubmit={submit} className=' flex flex-col gap-2 justify-center border p-5 bg-gray-200'>
            <label className=' font-bold'>Name : </label>
            <input className=' border border-white bg-white' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label className=' font-bold'>Email : </label>
            <input className=' border border-white bg-white' type="email" name="" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
            <label className=' font-bold'>Password : </label>
            <input className=' border border-white bg-white' type="password" name=""onChange={(e)=>setPassword(e.target.value)} value={password}/>
            {/* <input className=' border' type="text" name="" id="position" value="user" hidden/> */}
            <label htmlFor="">Profle photo</label>
            <input className=' border border-white bg-white' type="file" name="" id="" onChange={(e)=>setImage(e.target.files[0])} />
            <button type='submit' className=' bg-blue-800 text-white px-4 py-2'>Submit</button>
            <h1 className=' text-sm'>Alredy have an account? <Link><span className=' text-blue-800'>Login</span></Link></h1>
        </form>
        </div>
    </div>
  )
}

export default Signup