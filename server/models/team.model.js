const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: [true, 'Please add the year of the team'],
  },
  email: {
    type: String,
    required: [true, 'Please enter the emailID of Team'],
  },
  teamName: {
    type: String,
    required: [true, 'Please add the Name of Team'],
    enum: [
      'CHENNAI SUPER KINGS',
      'DELHI CAPITALS',
      'GUJARAT TITANS',
      'KOLKATA KNIGHT RIDERS',
      'LUCKNOW SUPER GIANTS',
      'MUMBAI INDIANS',
      'PUNJAB KINGS',
      'RAJASTHAN ROYALS',
      'ROYAL CHALLENGERS BANGALORE',
      'SUNRISERS HYDERABAD',
    ],
  },
  captain: {
    type: String,
    required: [true, 'Please add the Captain of Team'],
  },
  viceCaptain: {
    type: String,
    required: [true, 'Please add the viceCaptain of Team'],
  },
  shareHolder: {
    type: Array,
    required: [true, 'Please add the share holders of Team'],
  },
  rank: {
    type: Number,
    required: [true, 'Please add the rank of Team'],
  },
  logo: {
    type: String,
    required: [true, 'Please add the logo of the team'],
  },
  jersey: {
    type: String,
    required: [true, 'Please add the jersey of the team'],
  },
  players: {
    type: Array,
  },
  batsman: {
    type: Array,
  },
  bowler: {
    type: Array,
  },
  all_rounder: {
    type: Array,
  },
});

module.exports = mongoose.model('Team', TeamSchema);
