import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
const Dialogs = () => {
  return (


    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
        <NavLink activeClassName={s.active} to="/dialogs/1"> Masha</NavLink>
          </div>
        <div className={s.dialog}>
        <NavLink activeClassName={s.active} to="/dialogs/2"> Sasha</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink activeClassName={s.active} to="/dialogs/3"> Lena</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink activeClassName={s.active} to="/dialogs/4"> Alina</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink activeClassName={s.active} to="/dialogs/5"> Julia</NavLink>
        </div>
       
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