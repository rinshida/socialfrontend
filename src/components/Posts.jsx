import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaRegCircle } from "react-icons/fa";

const Posts = () => {
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
      const response = await axios.get("https://socialbackend-gxmb.onrender.com/api/getposts", {
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
    <div className=' w-full h-screen flex flex-col gap-5 items-center py-5 bg-gradient-to-b from-blue-950 to-blue-800
'>
      {/* <h1 className=' text-6xl font-black text-white'>POSTS</h1> */}
      <div className=' grid lg:grid-cols-4 sm:grid-cols-1 gap-5'>

        {posts.map((post, j) => {
          return (
            //  <Link to={`/post?id=${post._id}`} key={i}>
            <div  className=' w-[250px] h-[330px] flex flex-col gap-2 overflow-hidden border rounded-xl border-white  bg-white p-5' key={j}>
              <div className=' flex gap-2 items-center h-[20px] '>
                <img className=' w-[20px] h-[20px] rounded-[50px] bg-gray-100' src={post.userId.profile} alt="img" />
                <h1>{post.userId.name}</h1></div>
              <div className=' flex flex-col justify-between '><div className='  w-[250px] '>
                <div className=' w-[200px] h-[200px] overflow-hidden'><div className=' w-[200px] h-[200px] duration-700 flex '
                  style={{ transform: `translateX(-${carosal[j] * 100}%)` }}>

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
      {/* <div className=' w-full flex  flex-col gap-2 items-center justify-center px-[100px]'>
        <h1 className=' font-black'>Add new employee</h1>
        <Link to={"/add"}><button className=' bg-black text-white py-2 px-4'>+</button></Link>
    </div> */}
    </div>
  )
}

export default Posts