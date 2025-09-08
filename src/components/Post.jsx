import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Post = () => {
const [searchParams] = useSearchParams();
const productId = searchParams.get("id");
    
    useEffect(()=>{
        const fetchProduct = async ()=>{

            await axios.get(`api/5000/getproduct?productId=${productId}`)

        }
    },[])
  return (
    <div className=' w-screen h-screen bg-blue-950 flex items-center justify-center'>
        <h1 className=' text-black '>post</h1>
    </div>
  )
}

export default Post