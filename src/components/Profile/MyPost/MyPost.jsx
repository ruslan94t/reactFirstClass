import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = (props) => {


let postElements = props.posts.map(p=><Post message={p.message} likeCount={p.likeCount} />)



let newPostElement = React.createRef();
//addPost 
let addPost = ()=>{
  debugger;
  let text = newPostElement.current.value;
  alert(text)
}


    return (
    <div className={s.wrapper}>
   
      <div className={s.area}>
        <h3>My Post</h3>
       <textarea ref={newPostElement} />
       <div className={s.container}>

       <button onClick={addPost}>Add Post</button>
       <button>Remove Post</button>
       </div>
      
      </div>
      <div className={s.posts}>
     {postElements}
      </div>
    </div>)

}

export default MyPost;