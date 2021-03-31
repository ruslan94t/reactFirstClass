import React from 'react';
import MyPost from './MyPost/MyPost';

import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from "./MyPost/MyPostContainer";




const Profile = (props) => {

    return(
    <div>
  <ProfileInfo />
   <MyPostContainer
   store={props.store}
   />
  </div>

    )
}

export default Profile;