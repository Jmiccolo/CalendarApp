const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    Date: String,
    Title: String
})

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;