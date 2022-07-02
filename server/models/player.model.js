const mongoose = require("mongoose");

const player = [
  {
    id: 0,
    name: "Dhoni",
  },

  {
    id: 1,
    name: "Rishabh Pant",
  },
];

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the Name of Player"],
  },
  role: {
    type: String,
    required: [true, "Please add the role of Player"],
    enum: ["bowlers", "batsman", "wicket_keeper", "all_rounder"],
  },
  team: {
    type: String,
    required: [true, "Please add the role of Player"],
    enum: [
      "CHENNAI SUPER KINGS",
      "DELHI CAPITALS",
      "GUJARAT TITANS",
      "KOLKATA KNIGHT RIDERS",
      "LUCKNOW SUPER GIANTS",
      "MUMBAI INDIANS",
      "PUNJAB KINGS",
      "RAJASTHAN ROYALS",
      "ROYAL CHALLENGERS BANGALORE",
      "SUNRISERS HYDERABAD",
    ],
  },
  runs: {
    type: Number,
    required: [true, "Please add the runs of Player"],
  },
  wickets: {
    type: Number,
    required: [true, "Please add the wickets of Player"],
  },
  matches: {
    type: Number,
    required: [true, "Please add the matches of Player"],
  },
  nationality: {
    type: String,
    required: [true, "Please add the nationality of Player"],
  },
  iccT20Ranking: {
    type: Number,
    required: [true, "Please add the iccT20Ranking of Player"],
  },
  economy: {
    type: Number,
    required: [true, "Please add the economy of Player"],
  },
  strikeRate: {
    type: Number,
    required: [true, "Please add the strikeRate of Player"],
  },
  fours: {
    type: Number,
    required: [true, "Please add the fours of Player"],
  },

  sixes: {
    type: Number,
    required: [true, "Please add the sixes of Player"],
  },
  balls: {
    type: Number,
    required: [true, "Please add the balls of Player"],
  },
  highScore: {
    type: Number,
    required: [true, "Please add the highScore of Player"],
  },
  highestWickets: {
    type: Number,
    required: [true, "Please add the highestWickets of Player"],
  },
});

module.exports = mongoose.model("Players", PlayerSchema);
