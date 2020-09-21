const mongoose = require("mongoose");

const calendarSchema = new mongoose.Schema({
    Location:String,
    Events:[{type:mongoose.Schema.Types.ObjectId, ref:"Event"}]
})

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Calendar;