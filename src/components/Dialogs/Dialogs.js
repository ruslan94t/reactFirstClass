import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

let dialogsData = [
  {id:1, name:'Olya'},
  {id:2, name:'Mahsa'},
  {id:3, name:'Shasa'},
  {id:4, name:'Juliya'},
   ];
let messagesData = [
{id:1, message:'You You Yuu'},
{id:2, message:'Hello html'},
{id:3, message:'Hello flex'},
{id:4, message:'Hi Juliya'},
  ];




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