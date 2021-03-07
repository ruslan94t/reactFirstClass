import React from 'react';
import MyPost from './MyPost/MyPost';

import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
    return(
    <div>
  <ProfileInfo />
   <MyPost
   posts={props.profilePages.posts}
   dispatch={props.dispatch}
   newPostText={props.profilePages.newPostText}
   updateNewPostText={props.updateNewPostText}
   />
  </div>

    )
}

export default Profile;