import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = (props) => {


let postElements = props.posts.map(p=><Post message={p.message} likeCount={p.likeCount} />)




    return (
    <div className={s.wrapper}>
   
      <div className={s.area}>
        <h3>My Post</h3>
       <textarea></textarea>
       <div className={s.container}>

       <button>Add Post</button>
       <button>Remove Post</button>
       </div>
      
      </div>
      <div className={s.posts}>
     {postElements}
      </div>
    </div>)

}

export default MyPost;