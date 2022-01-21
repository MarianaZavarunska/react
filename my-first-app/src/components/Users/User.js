import React from "react";

import "./Users.css";

const User = ({ user }) => {
  const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    phone,
    website,
    company: { companyName, catchPhrase, bs },
  } = user;

  return (
    <div className="user-details-container">
      <div>Id: {id}</div>
      <div>Name: {name}</div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <div>
        Address:
        <div>Street: {street}</div>
        <div>Suite: {suite}</div>
        <div>City: {city}</div>
        <div>Zipcode: {zipcode}</div>
        <div>
          Geo:
          <div>Lat: {lat}</div>
          <div>Lng: {lng}</div>
        </div>
        <div>Phone: {phone}</div>
        <div>Website: {website}</div>
        <div>
          Company:
          <div>Name: {companyName}</div>
          <div>catchPhrase: {catchPhrase}</div>
          <div>Bs: {bs}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
