import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'




const DialogItem = (props)=>{
  return(

    <div className={s.dialog}>
    <NavLink activeClassName={s.active} to={"/dialogs/"+props.id}> 
                    {props.name}
    </NavLink>
      </div>
  )
}


const Message= (props)=>{
  return(

    <div className={s.message}>{props.message}</div>

  )
}






const Dialogs = () => {
  return (


    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      <DialogItem name="Sasha" id="1" />
      <DialogItem name="Lena" id="2" />
      <DialogItem name="Alina" id="3" />
      <DialogItem name="Julia" id="4" />
       
      </div>

      <div className={s.messages}>
      <Message message="hi how you" />
      <Message message="im fine" />
      <Message message="Do you now" />
      <Message message="Joker" />
      </div>

    </div>

  )
}

export default Dialogs; 