import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
const MyPost = () => {

  let posts = [
    {id:1, message:'You You Yuu', likeCount:"1"},
    {id:2, message:'Hello html', likeCount:"3"},
    {id:3, message:'Hello flex', likeCount:"34"},
    {id:4, message:'Hi Juliya', likeCount:"11"}
      ];
    
let postElements = posts.map(p=><Post message={p.message} likeCount={p.likeCount} />)




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