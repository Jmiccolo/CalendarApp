import React from 'react';

const CalendarControl = (props) => {
    const{minusYear, minusMonth, plusYear, plusMonth, handleMonthChange, handleYearChange, handleJump, year, month, location, locations, setLocation} = props;

    function handleLocation(e) {
        setLocation(e.target.value);
    }
    return (
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            <h1 style={{flexBasis:"100%", textAlign:"center"}}>{new Date(year, month - 1).toLocaleString('default', { month: 'long' })}</h1>
            <button onClick={minusYear} style={{ padding: "1rem", cursor: "pointer", marginX: "1rem" }}>{"<<"}</button>
            <button onClick={minusMonth} style={{ padding: "1rem", marginX: "1rem" }}>{"<"}</button>
            <input type="number" min="1" max="12" value={month} onChange={handleMonthChange} />
            <input type="number" min={1900} max={2100} value={year} onChange={handleYearChange} />
            <button onClick={plusMonth} style={{ padding: "1rem", marginX: "1rem" }}>{">"}</button>
            <button onClick={plusYear} style={{ padding: "1rem", marginX: "1rem" }}>{">>"}</button>
            <select value={location} onChange={handleLocation}>
                <option value="">Choose Location</option>
                {locations}
            </select> 
            <button style={{flexBasis:"100%"}} onClick={handleJump}>Jump to Today</button>
        </div>
    );
};

export default CalendarControl;