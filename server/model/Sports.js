const mongoose = require("mongoose");
// Data schema
const sportsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    selectedFile: {
      type: String,
    },
    creator: {
      type: String,
    },
    username: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    likes: {
      type: [String],
      default: [],
    },
    comments: {
      type: [String],
      default: [],
    },
    label: {
      type: String
    }
  },
  { timestamps: true }
);

const Sports = mongoose.model("Sports", sportsSchema); //data model
module.exports = Sports;
