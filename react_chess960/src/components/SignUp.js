import React from 'react';
import axios from 'axios';

const SignUp = () => {
    const day = new Date();
    return (
        <div className='is-Centered'>
            <form onSubmit={handleSubmit} className='form-group'>
                <h1>Sign Up</h1>
                
                <div className='form-input'>
                    <input name='username' type='text' placeholder='Name'/>
                </div>
                <div className='form-input'>
                    <input name="email"  type="text" placeholder="Email Ex.(elani@email.com)" />
                </div>
        
                <div className='form-input'>
                    <input name="password" type="password" placeholder="Password"/>
                </div>
                
                <div className='form-input'>
                    <input name="password_confirmation" type="password" placeholder="Password"/>
                </div>
                
                <div className='form-input'>
                    <div className='form-actions'>
                        <a href='/login'>Back to Login</a>
                        <input type="submit" className='btn' value="Submit" />
                    </div>
                </div>
                
            </form>
        </div>
    )
};

const handleSubmit = (e) => {
     e.preventDefault();
     axios.post('http://54.86.241.66:8080/signup',
        {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,            
            password_confirmation: e.target.password_confirmation.value
        }
     ).then((res)=>{
         console.log('sign in user here with reducer')
     })
     .catch((e)=>{
         console.log(e)
     })
}

export default SignUp;