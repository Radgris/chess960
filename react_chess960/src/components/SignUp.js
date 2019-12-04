import React from 'react';

const SignUp = () => {
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
                    <input name='birthdate' type='date' min='1980-01-01'/>
                </div>
                <div className='form-input'>
                    <input name='country' type='country' placeholder='Country'/>
                </div>
                <div className='form-input'>
                    <input name="Email"  type="text" placeholder="Email Ex.(elani@email.com)" />
                </div>
        
                <div className='form-input'>
                    <input name="Password" type="password" placeholder="Password"/>
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
     console.log("ahoyyy")
}

export default SignUp;