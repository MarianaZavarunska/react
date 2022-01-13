import React from 'react';

import {useEffect, useState} from 'react';
import Posts from '../Posts/Posts';
import UserDetails from '../UserDetails/User.details';
import User from './User';
import "./Users.css"


const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setUsers(users))
    }, [])

    const getUser =(user) => {
       setUser(user)

    }
    const getUserId=(id)=>{
        setUserId(id)
    }

    return (
        <div className='users-container'>
            {user && <UserDetails key={user.id}  userDetail={user} getUserId={getUserId}/> } 
        
            {users.map( user => <User key={user.id} user={user} getUser={getUser}/> )}
            
            <Posts userId={userId}/>
            
        </div>
    );
};

export default Users;