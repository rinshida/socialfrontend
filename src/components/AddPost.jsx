import axios from 'axios'
import React, { useState } from 'react'

const AddPost = () => {
   const [caption,setCaption] = useState("")
    const [discription,setDescription] = useState("")
    const [images,setImages] = useState([])

    const submit = async(e)=>{
         e.preventDefault()
        console.log(caption,discription,images)
        const id = localStorage.getItem('id')

        const toBase64 = file => new Promise((resolve,reject)=>{
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = reject 
        })

        

        const files = await Promise.all(
          images.map((file)=>toBase64(file))
        )
       
  try{
        const response = await axios.post("http://localhost:5000/api/addpost",{caption,discription,images:files,userId:id})
        if(response){
            console.log("data sented successfully")
            window.alert("added successfully")
            console.log(response)
        }
      }catch(err){
        console.log(err)
      }
    }
    
  return (
    <div className=' w-screen h-[570px] flex flex-col items-center justify-center gap-3 bg-gradient-to-r from-blue-950 to-gray-300'>
      <h1 className=' text-2xl font-black text-white'>ADD POST</h1>
        <div>
          <form  onSubmit={submit} className=' flex flex-col gap-2 justify-center border p-5 bg-gray-50'>
            <label className=' font-bold'>Image:</label>
            <input type="file"multiple name="" id="" onChange={(e)=>setImages(Array.from(e.target.files))}/>
            <label className=' font-bold'>Caption : </label>
            <input className=' border' type="text" name="" id="" onChange={(e)=>setCaption(e.target.value)} value={caption}/>
            <label className=' font-bold'>Description : </label>
            <input className=' border' type="text" name="" id="" onChange={(e)=>setDescription(e.target.value)} value={discription}/>
            <button type='submit' className=' bg-blue-800 text-white px-4 py-2'>Submit</button>

        </form>
        </div>
    </div>
  )
}
export default AddPost