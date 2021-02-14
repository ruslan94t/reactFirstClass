import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
const MyPost = () => {

  let postData = [
    {id:1, message:'You You Yuu', likeCount:"1"},
    {id:2, message:'Hello html', likeCount:"3"},
    {id:3, message:'Hello flex', likeCount:"34"},
    {id:4, message:'Hi Juliya', likeCount:"11"}
      ];
    





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
      <Post message="Hi how you" likeCount="1" />
      <Post message="My Name" likeCount="45" />
      <Post message="Whery you" likeCount="2" />
      <Post message="props you left" likeCount="23" />
      </div>
    </div>)

}

export default MyPost;