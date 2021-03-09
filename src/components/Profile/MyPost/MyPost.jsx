import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";




const MyPost = (props) => {
let postElements = props.posts.map(p=><Post message={p.message} likeCount={p.likeCount} />)

let newPostElement = React.createRef();

//addPost
let addPost = (e)=>{
    e.preventDefault()
  let text = newPostElement.current.value;
  props.dispatch(addPostActionCreator())

}

let onPostChange = (e)=>{
    e.preventDefault()
    let text = newPostElement.current.value;
  //  let action = {type:'UPDATE-NEW-POST-TEXT', newText:text};
    let action = updateNewPostTextActionCreator(text);

    props.dispatch(action);
}

    return (
    <div className={s.wrapper}>

      <div className={s.area}>
        <h3>My Post</h3>
       <textarea
           onChange={onPostChange}
           ref={newPostElement}
           value={props.newPostText}


       />
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