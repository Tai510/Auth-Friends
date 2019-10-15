import React, { useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth.js";

const AddFriend = () => {
    const [friend, setFriend] = useState({name:'', email:''})

    const handleChange = e => {
        setFriend({
            ...friend, [e.target.name]: e.target.value
        })
    }

    const onSumbit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', friend)
        .then(res => {
            setFriend({
                ...friend
            })
            console.log(friend)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='AddFriends'>
            <form className='add-Friend-Form ' onSubmit={onSumbit}>
                <input onChange={handleChange} placeholder='Name' name='name' value={friend.name}></input>
                <input onChange={handleChange} placeholder='Email' name='email' value={friend.email}></input>
                <button>Add Friend</button>
            </form> {/* add-Friend-Form  end */}
        </div> /* AddFriends end */
    )
}

export default AddFriend;