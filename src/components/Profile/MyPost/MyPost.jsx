import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
const MyPost = () => {
    return (
    <div>
      My posts
      <div className={s.area}>
       <textarea></textarea>
       <div className={s.container}>

       <button>Add Post</button>
       <button>Remove Post</button>
       </div>
      
      </div>
      <div className={s.posts}>
      <Post message="Hi how you" likeCount="1" />
      <Post message="My Name" likeCount="45" />
      <Post message="Whery you" likeCount="2" />
      <Post message="props you left" likeCount="23" />
      </div>
    </div>)

}

export default MyPost;