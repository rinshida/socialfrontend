import React from 'react'
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { SiInstacart } from "react-icons/si";
import { CgAddR } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Navebar = () => {
    const navigate = useNavigate()
    const profile = ()=>{
         navigate('/profile')
    }
    const newPost = ()=>{
         navigate('/add')
    }
  return (
    <div className=' w-full h-[70px] border-b bg-blue-950 text-white font-serif 
    overflow-hidden text-3xl font-medium flex justify-between px-[60px] pt-[15px] pb-[20px] box-border'>
        <div className=' flex gap-2'><SiInstacart /><h1>Socialgram</h1></div>
        <div className=' flex gap-4'>
          <div onClick={profile}><RiAccountPinCircleFill /></div>
        <div><FaRegHeart /></div>
        <div onClick={newPost}><CgAddR /></div></div>
    </div>
  )
}

export default Navebar