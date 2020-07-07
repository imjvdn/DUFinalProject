const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema(
    {
        title: String,
        description: String,
        name: String,
        link: String,
        image: String,
        date: { type: Date, default: Date.now}
    }
)
const Homeplan = mongoose.model("Homeplan", homeSchema);

module.exports = Homeplan;