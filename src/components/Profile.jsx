import React from 'react'

const Profile = () => {
  return (
    <div className=' flex flex-col w-screen bg-blue-950'>

       <div className=' w-screen flex'>
        <div><img className=' w-[150px] h-[150px] rounded-[50px]' src="" alt="" /></div>
        <div>
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
       <div className=' w-screen'></div>

    </div>
  )
}

export default Profile