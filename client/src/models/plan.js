const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    displayname: String,
    email: String,
    username: { type: String, required: true },
    title: String,
    restaurant: String,
    description: String,
    image: String,
    link: String,
    date: { type: Date, default: Date.now },
  },
  { collection: 'finalproject' }
);

const apiSchema = new Schema({
  name: { type: String, required: true },
  link: String,
  image: String,
  date: Date,
});

const Plan = mongoose.model('Plan', userSchema);
// const ApiModel = Base.discriminator('ApiModel', apiSchema);

module.exports = Plan;
