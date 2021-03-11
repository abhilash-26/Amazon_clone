 import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.js';
import Login from './Login';
import {auth } from './firebase'
import {useStateValue} from './Stateprovider'

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log(`The user is ${authUser}`);

      if(authUser){

        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
  },[])

  return (
     
    <Router>
    <div className="app">
      <Switch>
        <Route path='/login'><Login/></Route>
        <Route path='/subtotal'><Header/><Checkout/></Route>
        <Route path='contact'><h1>This is contact details</h1></Route>
        <Route path='/' ><Header/><Home/></Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
