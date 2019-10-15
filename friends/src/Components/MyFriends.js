import React, { useState, useEffect } from 'react';
import AddFriend from '../Components/AddFriends'
import Friends from '../Components/Friends';
import axiosWithAuth from '../utils/axiosWithAuth';

const MyFriends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => 
            setFriends(res.data))
        .catch(err => console.log(err))
    })

    return (
        <div className='MyFriends'>
            <AddFriend />
            {friends.map(friend => (
            <div key={friend.id}>
            <Friends newFriend={friend} />
            </div>
      ))}
        </div> /* MyFriends end */
    )
}

export default MyFriends;



