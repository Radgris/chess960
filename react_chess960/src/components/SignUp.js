import React from 'react';
import axios from 'axios';

const SignUp = () => {
    const day = new Date();
    return (
        <div className='is-Centered'>
            <form onSubmit={handleSubmit} className='form-group'>
                <h1>Sign Up</h1>
                
                <div className='form-input'>
                    <input name='name' type='text' placeholder='Name'/>
                </div>
                <div className='form-input'>
                    <input name='lastname' type='text' placeholder='Last Name'/>
                </div>
                <div className='form-input'>
                    <input name='birthdate' type='date' min='1980-01-01' max={`${day.getYear()}-${day.getMonth()}-${day.getDate()       }`}/>
                </div>
                <div className='form-input'>
                    <input name='country' type='country' placeholder='Country'/>
                </div>
                <div className='form-input'>
                    <input name="email"  type="text" placeholder="Email Ex.(elani@email.com)" />
                </div>
        
                <div className='form-input'>
                    <input name="password" type="password" placeholder="Password"/>
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
     console.log(e.target.birthdate.value);
     axios.post('http://ec2-54-86-241-66.compute-1.amazonaws.com:8080/signup',
        {
            headers: 
                {
                    'Access-Control-Allow-Origin': '*'
                    
                }
        },
        {
            data:
                {
                    name: e.target.name.value,
                    lastname: e.target.lastname.value,
                    birthdate: e.target.birthdate.value,
                    country: e.target.country.value,
                    email: e.target.email.value,
                    password: e.target.password.value
                }
        }
     ).catch((e)=>{
         console.log(e)
     })
     console.log("ahoyyy")
}

export default SignUp;