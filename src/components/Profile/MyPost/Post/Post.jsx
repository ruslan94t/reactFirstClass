import React from 'react';
import s from './Post.module.css'
const Post = (props) => {

    return (
  
        <div className={s.item}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfYqD6IfYG0J-bdYoNtuGFNHWljELLrEABw&usqp=CAU&ec=45774421' />
         <h5>{props.message}</h5> 
          <span>Like </span>
        </div>
   
       
  )

}

export default Post;