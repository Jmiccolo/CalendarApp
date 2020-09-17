 import React, { useState} from 'react';

const Calendar = (props) => {
    const yearSetup = new Date().getFullYear();
    const MonthSetup = new Date().getMonth();
    const [year, setYear] = useState(yearSetup);
    const [month, setMonth] = useState((MonthSetup + 1));
    const days = new Date(year, month, 0).getDate();
    const dateBox = [];
    var x = 1;
    var events = [{date:"9/16/2020", title:"The Beginning of the Year Bash!"}]
    
    
    
    function handleMonthChange(e){
        e.preventDefault();
        setMonth(parseInt(e.target.value));
    }
    function handleYearChange(e){
        e.preventDefault();
        setYear(parseInt(e.target.value));
    }
    function minusYear(){
        setYear(year-1);
    }
    function plusYear(){
        setYear(year+1);
    }
    function minusMonth(){
        if(month!==1){
        setMonth(month-1);
        }else{
            setMonth(12);
        }
    }
    function plusMonth(){
        if (month !== 12) {
            setMonth(month + 1);
        } else {
            setMonth(1);
        }
    }

    for(var i = 1; i <= 35; i++)
    {
        let start = new Date(year, (month-1), 1).getDay();
        if(start !== 0 && (i-1) < start){
            let last = new Date(year, (month-2 > 0 ? month-2 : 11), 0).getDate();
            dateBox.push(<div className="DateBox" style={{ flexBasis: "14%", flexGrow: 1, border: "1px solid black" }} key={i}>{last - start + i - 1} <div className="content">{events.filter(val => { if(parseInt(val.date.split("/")[0]) === month && parseInt(val.date.split("/")[1]) === last - start + i - 1 && parseInt(val.date.split("/")[2]) === year){return val}}).map(val => <h4>{val.title}</h4>)}</div></div>)
        }
        else{
            dateBox.push(<div className="DateBox" style={{ flexBasis: "14%", flexGrow: 1, border: "1px solid black" }} key={i}>{x} <div className="content">{events.filter(val => { if(parseInt(val.date.split("/")[0]) === month && parseInt(val.date.split("/")[1]) === x && parseInt(val.date.split("/")[2]) === year) { return val } }).map(val => <h4>{val.title}</h4>)}</div></div>)
        x++
        }
        if(x > days){
            x = 1;
        }
    }
    return (<div>
        <h1>{new Date(year, month-1).toLocaleString('default', { month: 'long' })}</h1>
        <span onClick={minusYear} style={{padding:"1rem", cursor:"pointer", margin:"1rem"}}>{"<<"}</span>
        <span onClick={minusMonth} style={{padding:"1rem", margin:"1rem"}}>{"<"}</span>
        <input type="number" min="1" max="12" value={month} onChange={handleMonthChange}/>
        <input type="number" min={1900} max={2100} value={year} onChange={handleYearChange}/>
        <span onClick={plusMonth} style={{ padding: "1rem", margin: "1rem" }}>{">"}</span>
        <span onClick={plusYear} style={{ padding: "1rem", margin: "1rem" }}>{">>"}</span>
        <div style={{display:"flex", flexWrap:"wrap", height:"50vw", marginTop:"2rem"}}>
            {dateBox}
        </div>
        </div>)
};  

export default Calendar;