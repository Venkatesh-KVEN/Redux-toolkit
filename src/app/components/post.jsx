'use client';
import React from 'react'
import Image from 'next/image'
import { FcLike } from "react-icons/fc";

import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/counterSlice';
import UserForm from './UserForm';
import CommentForm from './CommentForm';

function Post() {
  const dispatch = useDispatch();

  const updatedLikes=useSelector((state) => state.counter.value);

  const [showUser, setShowUser] = React.useState(false);
  const [showComment, setShowComment] = React.useState(false);

  const likeHandler = () => {
    dispatch(increment());
  }

  const handleUserForm = () => {
    setShowUser(!showUser);
  }
  
  const handleCommentForm = () => {
    setShowComment(!showComment);
  }

  return (
    <div className="flex flex-col md:flex-col items-center">
      <Image src="/flowers.jpg" alt="Post Image" loading='eager' width={400} height={300} className='w-fit h-full' />
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-5">
            
            <button onClick={handleUserForm} type="button" className="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30 active:scale-95 transition">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 12.5V1.003S3.5.5 4 .5h11s.5.002.5.502v13s0 1.498-1.5 1.498H2s-1.5.002-1.5-1.998v-7.5S.5 5.5 1 5.5h1m4.5-2H9m-2.5 2h6m-6 2h6m-6 2h6m-6 2h6" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Subscribe
            </button>
        
            <button onClick={handleCommentForm} type="button" className="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/30 active:scale-95 transition">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.798 1H4.12c-1.092 0-1.638 0-2.055.212a1.95 1.95 0 0 0-.852.852C1 2.481 1 3.027 1 4.12v11.308c0 1.091 0 1.637.212 2.054.187.367.486.665.852.852.417.213.963.213 2.055.213h1.755M8.798 1l5.849 5.849M8.798 1v4.289c0 .546 0 .819.106 1.027a1 1 0 0 0 .426.426c.209.107.482.107 1.028.107h4.289m0 0v.974M9.773 18.546l1.974-.395c.172-.034.258-.052.338-.083a1 1 0 0 0 .202-.108c.07-.05.133-.111.257-.236l4.052-4.052a1.378 1.378 0 1 0-1.95-1.95l-4.052 4.053c-.124.124-.186.186-.235.257a1 1 0 0 0-.108.201c-.032.08-.049.167-.083.339z" stroke="#FACC14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Comments
            </button>
        
            <button onClick={likeHandler} type="button" className="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30 active:scale-95 transition">
                <FcLike />      
                Like <span>{updatedLikes}</span>
            </button>
        </div>
        {showUser && (
            <div>
                <UserForm/>
            </div>
        )}
        {showComment && (
            <div>
                <CommentForm/>
            </div>
        )}
    </div>

  )
}

export default Post
