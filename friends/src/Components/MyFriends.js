import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import AddFriend from '../Components/AddFriends'
import Friends from '../Components/Friends';
import axios from '../../node_modules/axios';

const MyFriends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axios
        .get('/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    })

    return (
        <div>
            <AddFriend />
            {/* <h1>Friends</h1>  */}
            {friends.map(friend => (
            <div key={friend.id}>
            <Friends newFriend={friend} />
            </div>
      ))}
        </div>
    )
}

export default MyFriends;



