import React from 'react';

import { useEffect, useState } from 'react';
import Flight from "./Flight"
import './Flight.css'

const Flights = () => {

    const [flights, setFlights] = useState([])
    useEffect(() => {
        
        fetch('https://api.spacexdata.com/v3/launches/')
        .then(response => response.json())
        .then(flights => 
            setFlights(flights.filter((flight) => flight.launch_year !== '2020'))
        )
    }, [])
    return (
        <div className='flights-container'>
            {flights.map((flight) => <Flight key={flight.flight_number} id={flight.flight_number} missionName={flight.mission_name} launchYear={flight.launch_year} img={flight.links.mission_patch_small}/>)}
        </div>
    );
};

export default Flights;