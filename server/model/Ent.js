const mongoose = require("mongoose");
const moment = require("moment");
// const date = moment().toString()
const date = moment().format("LLLL");
console.log(date);
// Data schema
const entertainmentSchema = new mongoose.Schema(
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

const Ent = mongoose.model("Entertainment", entertainmentSchema); //data model
module.exports = Ent;
