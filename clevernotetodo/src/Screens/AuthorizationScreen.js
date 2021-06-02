import React,{useState, useEffect} from 'react'
import './AuthorizationScreen.css'
import db from '../firebase';
import { auth } from '../firebase'

function AuthorizationScreen({getUserInfo}) {
    const [user, setUser] = useState({})
    const handleChange = ({target: { value, id} } ) => {
        setUser({
            ...user,
            [id]: value
        })
    }
    const signUp = (e) => {
        e.preventDefault()
        const {email, password} = user
        auth
          .createUserWithEmailAndPassword(email, password)
          .catch(error => console.log(error))
    }

    const signIn = (e) => {
        e.preventDefault()
        const {email, password} = user
        auth
          .signInWithEmailAndPassword(email, password)
          .then((response) => getUserInfo(response.user.email))
          .catch(error => console.log(error))
    }

    return (
        <div className = 'authorizationScreen'>
            <div className='authorizationScreen__login'>
                <form>
                    <h1>Sign Up</h1>
                    <input 
                        type='email' 
                        onChange={handleChange}
                        id='email'
                        placeholder='Email'
                    />
                    <input 
                        type='password' 
                        placeholder='Password'
                        id='password'
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        onClick={signUp}
                    >
                    Sign Up
                    </button>
                    <h4>
                        <span className='authorizationScreen__login-title'>Do you have existing account? </span>
                        <span 
                            className='authorizationScreen__login-link'
                            onClick={signIn}
                        >
                            Sign In
                        </span>
                    </h4>
                </form>
        </div>
    </div>
            
    )
}

export default AuthorizationScreen
