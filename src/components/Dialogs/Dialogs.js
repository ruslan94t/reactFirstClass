import React from 'react';
import s from './Dialogs.module.css'
const Dialogs = () => {
  return (


    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Masha</div>
        <div className={s.dialog}>Yana</div>
        <div className={s.dialog}>Shaha</div>
        <div className={s.dialog}>Alina</div>
        <div className={s.dialog}>Juliya</div>
        <div className={s.dialog}>Angelina</div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>how yiu</div>
        <div className={s.message}>first man</div>
        <div className={s.message}>protect KingDom</div>
        <div className={s.message}>Most Know</div>
        <div className={s.message}>Mortal Day</div>
      </div>

    </div>

  )
}

export default Dialogs; 