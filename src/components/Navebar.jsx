import React from 'react'
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { SiInstacart } from "react-icons/si";
import { CgAddR } from "react-icons/cg";

const Navebar = () => {
  return (
    <div className=' w-screen h-[70px] bg-blue-950 text-white font-serif overflow-hidden text-3xl font-medium flex justify-between px-[60px] pt-[15px] pb-[20px]'>
        <div className=' flex gap-2'><SiInstacart /><h1>Socialgram</h1></div>
        <div className=' flex gap-4'><RiAccountPinCircleFill /><FaRegHeart /><CgAddR /></div>
    </div>
  )
}

export default Navebar