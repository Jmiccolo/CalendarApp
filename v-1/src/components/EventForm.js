import React, { useEffect, useState } from 'react';
import {apiCall} from "../services/api";

const EventForm = (props) => {
    const {day, setDay, locations, location, setLocation} = props;
    const [date, setDate] = useState(day);
    const [title, setTitle] = useState("");
    const [eventLocation, setEventLocation] = useState(location);

    useEffect(()=>{
        setDate(day);
    }, [day])

    function handleDateChange(e){
        setDay(e.target.value);
    }

    function handleTitleChange(e){
        setTitle(e.target.value);
    }

    function handleLocationChange(e) {
        setEventLocation(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        let event = {
            date:date,
            title:title,
            location:eventLocation
        }
        apiCall("post", "/api/event", event)
        .then(res=> {
            setDay("");
            setLocation(eventLocation);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    function handleClear(){
        setDay("");
    }

    

    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <h2>Add an Event</h2>
            <label htmlFor="location">Location:</label>
            <select name="location" value={eventLocation} onChange={handleLocationChange}>
                <option value="">Choose Location</option>
                {locations}
            </select>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" value={date} onChange={handleDateChange} />
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" value={title} onChange={handleTitleChange}/>
            <input type="submit" onClick={handleSubmit}/>
            <button onClick={handleClear}>clear</button>
        </div>
    )
}

export default EventForm;