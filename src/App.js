import React from 'react';
import { BrowserRouter,  Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <div className="content">


      <Route path="/dialogs" render={()=><DialogsContainer />

    } />
      <Route path="/profile" component={()=> <Profile />

        } />
      </div>
    </div>

 );
}

export default App;