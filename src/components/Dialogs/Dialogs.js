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
  let dialogs = [
    {id:1, name:'Olya'},
    {id:2, name:'Mahsa'},
    {id:3, name:'Shasa'},
    {id:4, name:'Juliya'},
     ];
  let messages = [
  {id:1, message:'You You Yuu'},
  {id:2, message:'Hello html'},
  {id:4, message:'Hi Juliya'},
  {id:3, message:'Hello flex'},
  ];
  
let dialogsElemnts = dialogs.map(d=>  <DialogItem name={d.name} id={d.id} />);  
let messagesElements = messages.map(m=> <Message message={m.message} />)





  return (


    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
    {dialogsElemnts}
     
       
      </div>

      <div className={s.messages}>
      
   {messagesElements}
      </div>

    </div>

  )
}

export default Dialogs; 