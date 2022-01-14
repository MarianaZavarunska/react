import React from 'react'; 

import '../UserDetails/UserDetails.css'

const User = ({user,getUser}) => {
    const {id, name} = user;
    
    return (
        <div className='user-container'>
            <div>{id}. {name}</div>
            
             <button onClick={() => getUser(user)} className='btn-details'>details</button>
            
        </div>
    );
};

export default User;