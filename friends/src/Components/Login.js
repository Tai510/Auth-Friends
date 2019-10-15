import React, { useState } from 'react';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='Login'>
            <form className='login-Form'>
                <input placeholder='Username'></input>
                <input placeholder='Password'></input>
                <button>Submit</button>
            </form> {/* login-Form end */}
        </div> /* Login end */
    )
}

export default Login;

