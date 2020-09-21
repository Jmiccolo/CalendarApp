 import React, { useEffect, useState} from 'react';
 import MonthView from './MonthView';
 import {apiCall} from "../services/api";

const Calendar = (props) => {
    const [events, setEvents] = useState([]); 
    const [location, setLocation] = useState("");
    const [locations, setLocations] = useState([]);
    
    useEffect(()=>{
     apiCall("get", "/api/calendar")
    .then(res => res.map((location,index) => <option key={index} value={location}>{location}</option>))
    .then(res => setLocations(res))
    .catch(err => console.log(err));
    },[]);
    
    useEffect(()=>{
        if(location !== ""){
        apiCall("get", `/api/calendar/${location}`)
        .then(res => {
            setEvents(res.Events);
        })
    }
    },[location])
    
        return (
            <div>
                <MonthView events = {events} locations={locations} location={location} setLocation={setLocation}/>
            </div> 
        )
};  

export default Calendar;