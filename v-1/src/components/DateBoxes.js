import React from 'react';

const DateBoxes = (props) => {
    const {day, month, year, handleSelect, events} = props;
    const DateBox = [];
    const days = new Date(year, month, 0).getDate();
    const startDay = new Date(year, month-1, 1).getDay();
    const lastDay = new Date(year, month-1, days).getDay();

    

    if(startDay !== 0){
        const pastmonthdays = new Date(year, month - 1, 0).getDate();
        for(var i = startDay-1; i >= 0; i--)
        {
            DateBox.push(new Date(year, month-2, pastmonthdays-i));
        }
    }
    for(var j = 1; j <= days; j++){
        DateBox.push(new Date(year, month-1, j));
    }
    if(lastDay !== 6){
        for(var k = 1; k <= 6-lastDay; k++)
        {
            DateBox.push(new Date(year, month, k));
        }
    }
    const Boxes = DateBox.map((val, index) => {
        const DateEvents = events.filter(value => value.Date === val.toISOString().split("T")[0]);
        const Events = DateEvents.map((value, index) => <h5 key={index} class="Event">{value.Title}</h5>)
                return (<div className={(parseInt(day.split("-")[2]) === val.getDate() && parseInt(day.split("-")[1])-1 === val.getMonth() && parseInt(day.split("-")[0]) === val.getFullYear())? "Date Selected": (val.getMonth() !== month-1)? "Date Disabled":"Date"} data-day={val.toISOString().split("T")[0]} onClick={(val.getMonth() === month-1)?handleSelect:function(){}} key={index}>
            <h4>{val.getDate()}</h4>
            <div className="content">
                {Events}
            </div>
        </div>)
    })
    return (
        <div className="DateBox" style={{display:"flex", justifyContent:"center"} }>
            {Boxes}
        </div>
    );
};

export default DateBoxes;