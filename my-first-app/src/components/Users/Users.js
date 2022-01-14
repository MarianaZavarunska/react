import React from 'react';

import {useEffect, useState} from 'react';
import Posts from '../Posts/Posts';
import UserDetails from '../UserDetails/User.details';
import User from './User';
import "./Users.css";
import'../UserDetails/UserDetails.css';
import {services} from "../../services/services";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        services.getAllUsers()
        .then(users => setUsers(users))
    }, [])

    const getUser =(user) => {
       setUser(user)

    }
    const getUserId=(id)=>{
        setUserId(id)
    }

    return (
        <div >
            <div className='container'>
            {user && <UserDetails key={user.id}  userDetail={user} getUserId={getUserId}/> } 
            
            <div className='users-container'> {users.map( user => <User key={user.id} user={user} getUser={getUser}/> )}</div>
            
            </div>
           
            <Posts userId={userId}/>
            
        </div>
    );
};

export default Users;