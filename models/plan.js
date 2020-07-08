const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema(
  {
    // displayname: String,
    // email: String,
    // username: String,
    title: { type: String, default: "HEllo" },
    restaurant: String,
    description: { type: String, default: "World" },
    image: String,
    link: String,
    date: { type: Date, default: Date.now }
  });

// const apiSchema = new Schema({
//   name: { type: String, required: true },
//   link: String,
//   image: String,
//   date: Date,
// });

const Plan = mongoose.model("Plan", planSchema);
// const ApiModel = Base.discriminator('ApiModel', apiSchema);

module.exports = Plan;
