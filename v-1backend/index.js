require("dotenv").config();
const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      cors = require('cors'),
      db = require("./models")

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/api/Calendar/:location", async function(req, res, next){
    try{
        let calendar = await db.Calendar.findOne({Location:req.params.location}).populate("Events");
        if(calendar == null){
            throw "Error"
        }
        return res.status(200).json(calendar);
    }catch(err){
        return next(err);
    }
});
app.get("/api/Calendar/", async function(req, res, next){
    try{
        let calendars = await db.Calendar.find()
        let locations = calendars.map(calendar=>calendar.Location);
        return res.status(200).json(locations);
    }catch(err){
        return next(err);
    }
});

app.post("/api/Calendar",async function(req, res, next){
    try{
        console.log(req.body);
        let calendar = await db.Calendar.create({Location:req.body.Location, Events:[]});
        return res.status(200).json(calendar);
    }catch(err){
        return next(err);
    } 
})

app.post("/api/event", async function(req, res, next){
    try{
        let event = {
            Date:req.body.date,
            Title:req.body.title
        }
        let newEvent = await db.Event.create(event);
        console.log(newEvent);
        let calendar = await db.Calendar.findOne({Location:req.body.location});
        calendar.Events.push(newEvent);
        await calendar.save();
        return res.status(200).json(calendar);
    }catch(err){
        return next(err);
    }
})

app.listen(PORT, function () {
    console.log(`Server is starting on ${PORT}`);
});