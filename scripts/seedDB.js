const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/finalproject"
  );
  const planSeed = [
      {
        title: "Brewery",
        description: "Brewery with Date tonight",
        date: new Date(Date.now())
      },
      {
          title: "TestMany",
          description: "Testing Seed db and InsertMAny",
          date: new Date(Date.now())
      }
  ];
  db.Plan
  .remove({})
  .then(() => db.Plan.collection.insertMany(planSeed))
  .then(data => {
      console.log(data.result.n + " Recoreds Inserted!");
      process.exit(0);
  })
  .catch(err => {
      console.log(err);
      process.exit(1);
  });