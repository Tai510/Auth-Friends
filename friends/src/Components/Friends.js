import React from 'react'

const Friend = ( newFriend ) => {
  return (
    <div>
      <h2>{newFriend.name}</h2>
      <p>email: {newFriend.email}</p>
    </div>
  )
}

export default Friend; 