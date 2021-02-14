import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
const MyPost = () => {
    return (
    <div>
      My posts
      <div>
       <textarea></textarea>
       <button>Add Post</button>
       <button>Remove Post</button>
      </div>
      <div className={s.posts}>
      <Post message="Hi how you" />
      <Post message="My Name" />
      <Post message="Whery you" />
      <Post message="props you left" />
      </div>
    </div>)

}

export default MyPost;