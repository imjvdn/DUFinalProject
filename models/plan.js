const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema(
  {
    // displayname: String,
    // email: String,
    // username: String,
    title: String,
    restaurant: String,
    description: String,
    image: String,
    link: String,
    date: { type: Date, default: Date.now }
  });

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
