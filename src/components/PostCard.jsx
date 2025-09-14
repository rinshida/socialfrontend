// import React from 'react'

// const PostCard = (post) => {
//   return (
//     <div  className=' w-[250px] h-[330px] flex flex-col gap-2 overflow-hidden border rounded-xl border-white  bg-white p-5' key={j}>
//                   <div className=' flex gap-2 items-center h-[20px] '>
//                     <img className=' w-[20px] h-[20px] rounded-[50px] bg-gray-100' src={post.userId.profile} alt="img" />
//                     <h1>{post.userId.name}</h1></div>
//                   <div className=' flex flex-col justify-between '><div className='  w-[250px] '>
//                     <div className=' w-[200px] h-[200px] overflow-hidden'><div className=' w-[200px] h-[200px] duration-700 flex '
//                       style={{ transform: `translateX(-${carosal[j] * 100}%)` }}>
    
//                       {post.images.map((img, i) => {
//                         return (
//                           <img className=' object-cover flex-shrink-0 w-full h-full bg-gray-50' src={img} alt="" key={i} />)
//                       })}</div></div>
//                     <h4><span className=' font-bold'>{post.caption}</span></h4>
//                     <h4><span className=' font-bold'>{post.discription}</span></h4>
//                     {/* <h4><span className=' font-bold'>Phone</span> : {user.phone}</h4> */}
//                   </div>
//                   <div className=' flex '>
//                     <div className=' flex w-[100px] items-center'>
//                       <h1 className='  w-[20px]' onClick={() => setLikedPost(j, post._id)}>{like[j] == true ? (<FaHeart color="red"/>) : (<FaRegHeart />)}</h1>
//                     <h1>{likeCount[j]}</h1></div>
//                     <div className='h-[20px] flex gap-[1px] items-center justify-center'>
//                       {post.images.map((img, i) => <h1 className=' ' key={i} onClick={() => setImage(j, i)} >o</h1>)}</div>
//                   </div>
//                   </div>
//                 </div>
//   )
// }

// export default PostCard