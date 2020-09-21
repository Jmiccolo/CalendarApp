const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MongoDB_URL, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.set("useCreateIndex", true);

module.exports.Calendar = require("./Calendar");
module.exports.Event = require("./Event");