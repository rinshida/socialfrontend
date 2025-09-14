import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaRegCircle } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [like, setLike] = useState({})
  const [carosal, setCarosal] = useState({})
  const [likeCount,setLikeCount] = useState({})
  const navigate = useNavigate()

  useEffect(() => {

    const token = localStorage.getItem("id")
    console.log(token)

    async function getPosts() {

      try{
      const response = await axios.get("https://socialbackend-gxmb.onrender.com/api/getprofile", {
        headers: { Authorization: `Bearer ${token}` } //barer(jwt token)
      })
      console.log(response);

      if (response.status == 200) {
        console.log("got data")
        console.log(response)
        const posts = response.data.data
        setPosts(posts)
        const userData = response.data.user
        setUser(userData)
        console.log(posts)
        const likeState = {};
        const likeCount = {}
        posts.map((p, i) => {
          likeState[i] = userData.likedPosts.includes(p._id);
          likeCount[i] = p.likes
        });

        setLike(likeState);
        setLikeCount(likeCount)
      } else {
        console.log("not found")
      }
    }catch(error){
      console.log("loged out")
      localStorage.removeItem("id"); 
      navigate("/login")
    }
    }
    getPosts()


  }, [])
  console.log(posts)
  console.log(like)

  const setImage = (post, img) => {

    setCarosal((prev) => ({ ...prev, [post]: img }))

  }

  const setLikedPost = async (j, productId) => {
    console.log("on setLikePost function");
    const newLikeState = !like[j];
    setLike(prev => ({ ...prev, [j]: !prev[j] }))
    if(newLikeState==true){
        setLikeCount((prev)=>({...prev,[j]:prev[j]+1}))
      }else{
        setLikeCount((prev)=>({...prev,[j]:prev[j]-1}))
      }
    const response = await axios.post("https://socialbackend-gxmb.onrender.com/api/like", { userId:user._id, productId, likeState: newLikeState })
    if (response.status == 200) {
      console.log("like successfully")
      // window.alert("like successfull")
      console.log(response)
    } else {
      window.alert("like unsuccessfull")
      console.log(response)
    }



  }

  return (
    <div className=' flex flex-col gap-[50px] w-full  bg-blue-950 py-[30px] pl-[60px] pr-[120px] box-border'>

       <div className=' w-full flex gap-[200px] border-b border-b-white'>
        {user&&<div className=' flex flex-col '><img className=' w-[100px] h-[100px] rounded-[50px] bg-gray-50' src={user.profile} alt="" />
        <h1 className=' text-2xl text-white'>{user.name}</h1>
</div>}
        <div className=' flex gap-[200px] items-center text-2xl text-white'>
            <div className=' flex flex-col '>
                <h1>posts</h1>
                <h1>{posts.length}</h1>
            </div>
            <div className=' flex flex-col'>
                <h1>followers</h1>
                <h1>123</h1>
            </div>
            <div className=' flex flex-col'>
                <h1>following</h1>
                <h1>123</h1>
            </div>

           
        </div>
       </div>
       <div className=' grid lg:grid-cols-4 sm:grid-cols-1 gap-3 '>
        {posts.map((post, j)=>{
            return( 
                <div   className=' w-[250px] h-[330px] flex flex-col gap-2 overflow-hidden border rounded-xl border-white  bg-white p-5' key={j}>
                              <div className=' flex gap-2 items-center h-[20px] '>
                                {user && <img className=' w-[20px] h-[20px] rounded-[50px] bg-gray-100' src={user.profile} alt="img" />}
                                {user && <h1>{user.name}</h1>}</div>
                              <div className=' flex flex-col justify-between '>
                                <div className='  w-[250px] '>
                                <div className=' w-[200px] h-[200px] overflow-hidden'><div className=' w-[200px] h-[200px] duration-700 flex '
                                  style={{ transform: `translateX(-${(carosal[j] || 0) * 100}%)` }}>
                
                                  {post.images.map((img, i) => {
                                    return (
                                      <img className=' object-cover flex-shrink-0 w-full h-full bg-gray-50' src={img} alt="" key={i} />)
                                  })}</div></div>
                                <h4><span className=' font-bold'>{post.caption}</span></h4>
                                <h4><span className=' font-bold'>{post.discription}</span></h4>
                                {/* <h4><span className=' font-bold'>Phone</span> : {user.phone}</h4> */}
                              </div>
                              <div className=' flex '>
                                <div className=' flex w-[100px] items-center'>
                                  <h1 className='  w-[20px]' onClick={() => setLikedPost(j, post._id)}>{like[j] == true ? (<FaHeart color="red"/>) : (<FaRegHeart />)}</h1>
                                <h1>{likeCount[j]}</h1></div>
                                <div className='h-[20px] flex gap-[1px] items-center justify-center'>
                                  {post.images.map((img, i) => <h1 className=' ' key={i} onClick={() => setImage(j, i)} >o</h1>)}</div>
                              </div>
                              </div>
                            </div>
            )
})}
       </div>

    </div>
  )
}

export default Profile