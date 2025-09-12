import React from 'react'

const Profile = () => {
  return (
    <div className=' flex flex-col w-screen bg-blue-950'>

       <div className=' w-screen flex'>
        <div><img className=' w-[150px] h-[150px] rounded-[50px] bg-gray-50' src="" alt="" /></div>
        <div className=' flex gap-[200px] items-center'>
            <div className=' flex flex-col'>
                <h1>posts</h1>
                <h1>123</h1>
            </div>
            <div className=' flex flex-col'>
                <h1>followers</h1>
                <h1>123</h1>
            </div>
           
        </div>
       </div>
       <div className=' w-screen'>
        {[1,2,3,4,5].map((ele,i)=>{
            return( 
            <div  className=' w-[250px] h-[330px] flex flex-col gap-2 overflow-hidden border rounded-xl border-white  bg-white p-5' key={i}>
            <h1>post</h1>
            </div>)
})}
       </div>

    </div>
  )
}

export default Profile