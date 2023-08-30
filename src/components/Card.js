import React, { useState } from 'react';
import {FcLike} from 'react-icons/fc';
import {FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({course}) => {

  const desc = `${course.description.substring(0,100)}...`;
  const [liked,setLiked] = useState(true);
  const changeLikeHandler = ()=>{
    setLiked(!liked);
    if(liked){
      // document.getElementById('FcLike').style.cssText='display:flex'; 
      toast.success('Liked Successfully');
    }
    else{
      toast.warning('Liked Removed');
    }
  }
  return (
    <div className='bg-[#22223B] w-[300px] rounded-md overflow-hidden bg-opacity-90'>

      <div className='relative '>
        <img src={course?.image?.url} alt={course?.image?.alt}></img>
        <div className='w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full absolute right-2 bottom-[-12px]'>
          <button>
            {
              liked ? <FcLike fontSize='1.75rem' className='hidden' onClick={changeLikeHandler}></FcLike> : 
              <FcLike fontSize='1.75rem' className='flex' onClick={changeLikeHandler}></FcLike>
            }
            {
            liked ? <FcLikePlaceholder fontSize='1.75rem' onClick={changeLikeHandler} className='flex' />:
            <FcLikePlaceholder fontSize='1.75rem' onClick={changeLikeHandler} className='hidden' /> 
            }            
          </button>
        </div>

      </div>

      <div className='p-4'>
        <p className='text-white text-lg font-bold'>{course.title}</p>
        <p className='text-white mt-3'>{desc}</p>
      </div>

    </div>
  )
}

export default Card;