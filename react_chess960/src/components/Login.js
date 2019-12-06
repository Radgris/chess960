import React from 'react';
import './App.css';
import axios from 'axios';

const Login = () => (
    
    <div className="is-Centered">
    
       <form onSubmit={handleSubmit} className='form-group'>
        <h1>Sign In</h1>
        
        <div className='form-input'>
            <input name="username"  type="text" placeholder="Username" />
        </div>

        <div className='form-input'>
            <input name="email"  type="text" placeholder="Email Ex.(elani@email.com)" />
        </div>

        <div className='form-input'>
            <input name="password" type="password" placeholder="password"/>
        </div>
        <div className='form-input'>
            <div className='form-actions'>
                <a href='/signup'>Sign Up</a>
                <input type="submit" className='btn' value="Submit" />
            </div>
        </div>
        
      </form>
       
    </div>
)

const handleSubmit = (e) => {
     e.preventDefault();
     axios.post('http://54.86.241.66:8080/login.json',
        {
                username: e.target.username.value,
                // email: e.target.email.value,
                password: e.target.password.value
        },
        { 'Accept': 'application/json', 'Content-Type' : 'application/json'}
     ).then((res)=>{
         console.log('sign in user here with reducer')
     })
     .catch((e)=>{
         console.log(e)
     })
     console.log("ahoyyy")
}
    
export default Login