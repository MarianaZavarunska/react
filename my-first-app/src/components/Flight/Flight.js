import React from 'react';
import './Flight.css';

const Flight = (props) => {
    const {id, missionName, launchYear, img} = props;
    return (
        <div className='flight-container'>
            <div>Id: <b>{id}</b></div>
            <div>Name: <b>{missionName}</b></div>
            <div> Year: <b>{launchYear}</b></div>
            <img src={img} alt="{missionName}"/>
        </div>
    );
};

export default Flight;