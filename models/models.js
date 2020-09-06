const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: {type: String},
  price: {type: Number},
  qty: {type: Number}
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;