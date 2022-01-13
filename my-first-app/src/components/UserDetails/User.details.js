import React from 'react';

import "../Posts/Posts";


const UserDetails = ({userDetail,getUserId}) => {
   const {id,name,surname,email,address:{street,suite,city,zipcode,geo:{lat,lng}},phone,website,company:{companyName,catchPhrase,bs}} = userDetail;

    
    return (
        
        <div className='user-detail-container'>
           
            <div>Id: {id}</div>
            <div>Name:{name}</div>
            <div>Surname: {surname}</div>
            <div>Email: {email}</div>
            <div>
                Address:
                <div>Street: {street}</div>
                <div>Suite: {suite}</div>
                <div>City: {city}</div>
                <div>Zipcode: {zipcode}</div>

                <div>Geo:
                    <div>Lat: {lat}</div>
                    <div>Lng: {lng}</div>
                </div>

                <div>Phone: {phone}</div>
                <div>Website:{website}</div>

                <div>Company:
                    <div>Name: {companyName}</div>
                    <div>catchPhrase: {catchPhrase}</div>
                    <div>Bs: {bs}</div>
                </div>

            </div>
            <button onClick={() => getUserId(id)} className='btn-posts'>Get Posts</button>
        </div>
    );
};

export default UserDetails;