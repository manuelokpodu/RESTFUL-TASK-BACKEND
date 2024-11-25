const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
  },
  author: {
    type: String,
    required: true,
    // trim: true,
  },
  genre: {
    type: String,
    required: true,
    // default: 0,
    // min: 0,
    // max: 100,
  },
});

module.exports = mongoose.model("book", bookSchema);
