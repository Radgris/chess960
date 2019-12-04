import React from 'react';
import './App.css';

const Login = () => (
    
    <div className="is-Centered">
    
       <form onSubmit={handleSubmit} className='form-group'>
        <h1>Sign In</h1>
        
        <div className='form-input'>
            <input name="username"  type="text" placeholder="Username Ex.(elani@email.com)" />
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
     console.log("ahoyyy")
}
    
export default Login