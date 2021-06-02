import React,{useState, useEffect} from 'react'
import MainScreen from '../Screens/MainScreen'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthorizationScreen from '../Screens/AuthorizationScreen'
import './App.css'
import db from '../firebase'

export default function App()  {
    const [user, setUser] = useState('')
    
    const getUserInfo = (userData) => {
        setUser(userData)
    }

   return (
    <div className='app'>
       <Router>
           { !user ? (
               <AuthorizationScreen getUserInfo={getUserInfo}/>
           ) :  (
            <Switch>
                <Route exact path='/'>
                    <MainScreen/>
                </Route>
                <Route path='/profile'>
                    <AuthorizationScreen/>
                </Route>
            </Switch> 
           )}      
       </Router> 
    </div>       
   )
}
