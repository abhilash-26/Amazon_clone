import { Link,useHistory } from 'react-router-dom';
import React,{useState} from 'react'
import './Login.css';
import {auth,db} from './firebase';


function Login() {
 const history = useHistory();   
const [email,setEmail] = useState('');
const[password,setPassword]= useState('');

    const signIn=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))


    }
    const register = e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }

    return (
        <div className="login_page_container">
            <Link to='/' >
            <img className='login_logo' src='https://www.ampercent.com/wp/wp-content/uploads/Amazon-Logo.png'alt=''/>
            </Link>

            <div className='login_box'>
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                      <div className='button_container'> 
                    <button className='login_button' type='submit' onClick={signIn}>Sign In</button>

                    <button className='signup_button' onClick={register}>Sign Up</button>
                    </div> 
                </form>

            </div>
        </div>
    )
}

export default Login
