import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';






const Dialogs = (props) => {

    console.log(props)

    let dialogsElemnts = props.dialogsPage.dialogs.map(d=>  <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m=> <Message message={m.message} />)
    let newMessageBody = props.dialogsPage.newMessageBody;




    let onSendMessageClick = ()=>{
        props.sendMessage();

    }

    let onNewMessageChange =(e)=>{
        let body = e.target.value;
        props.updateNewMessageBodyyy(body);

    }
    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElemnts}


            </div>

            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                  <textarea
                      value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder='enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dialogs; 