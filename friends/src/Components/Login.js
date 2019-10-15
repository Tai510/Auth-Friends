import React, { useState } from 'react';
// import { axiosWithAuth } from '../Components/PrivateRoute'
import axios from 'axios';


const Login = props => {

    const [userConnect, setUserConnect] = useState({username:'', password:''});

    const handleChange = e => {
        e.preventDefault();
        setUserConnect({...userConnect, [e.target.name]: e.target.value})
        console.log('userConnect value...', userConnect)
    }

    const onSubmit = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', userConnect)
        .then(res => {
            console.log('res value...', res)
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => console.log(err));
    }
    

    return (
        <div className='Login'>
            <form onSubmit={onSubmit} className='login-Form'>
                <input onChange={handleChange} placeholder='Username' name='username' value={userConnect.username}></input>
                <input onChange={handleChange} placeholder='Password' name='password' value={userConnect.password}></input>
                <button>Submit</button>
            </form> {/* login-Form end */}
        </div> /* Login end */
    )
}

export default Login;

