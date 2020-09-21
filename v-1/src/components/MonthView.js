import React, {useState} from 'react';
import CalendarControl from "./CalendarControl";
import DateBoxes from "./DateBoxes";
import EventForm from "./EventForm";

const MonthView = (props) => {
    const {events, locations, location, setLocation} = props;
    const today = new Date().toLocaleDateString().split("/").map(value => parseInt(value));
    const [year, setYear] = useState(today[2]);
    const [month, setMonth] = useState(today[0]);
    const [day, setDay] = useState("");

    function handleMonthChange(e) {
        e.preventDefault();
        setMonth(parseInt(e.target.value));
    }
    function handleYearChange(e) {
        e.preventDefault();
        setYear(parseInt(e.target.value));
    }

    function handleSelect(e) {
        e.preventDefault();
        setDay(e.currentTarget.dataset.day);
    }

    function handleJump(){
        setYear(today[2]);
        setMonth(today[0]);
        setDay(`${today[2]}-${("0" + today[0]).slice(-2)}-${("0" + today[1]).slice(-2)}`);
    }
    function minusYear() {
        setYear(year - 1);
    }
    function plusYear() {
        setYear(year + 1);
    }
    function minusMonth() {
        if (month !== 1) {
            setMonth(month - 1);
        } else {
            setMonth(12);
            setYear(year - 1);
        }
    }
    function plusMonth() {
        if (month !== 12) {
            setMonth(month + 1);
        } else {
            setMonth(1);
            setYear(year + 1);
        }
    }
    return (<div>
        <CalendarControl 
        year = {year}
        month = {month}
        minusYear = {minusYear}
        plusYear = {plusYear}
        minusMonth = {minusMonth}
        plusMonth = {plusMonth}
        handleMonthChange = {handleMonthChange}
        handleYearChange = {handleYearChange}
        handleJump = {handleJump}
        location = {location}
        locations = {locations}
        setLocation = {setLocation}
        />
        <div className="DateEventView" style={{display:"flex"}}>
            {day !== "" ?<EventForm 
            day = {day} 
            locations={locations}
            setDay = {setDay}
            location = {location}
            setLocation = {setLocation}/> : null}
            <DateBoxes
                today={today}
                month={month}
                year={year}
                events={events}
                handleSelect={handleSelect}
                day={day} />
        </div>
    </div>)
}

export default MonthView;