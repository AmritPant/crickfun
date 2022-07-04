const { model } = require('mongoose');
const Player = require('../models/player.model');
const Team = require('../models/team.model');

//////////////////////////////////////////////////////////////////////
//  SEARCHING FOR ALL TEAMS
async function getAllTeams(req, res) {
  const teamData = await Team.find({});
  return res.status(200).json({ status: 'success', data: teamData });
}
//////////////////////////////////////////////////////////////////////
//  GETTING ONE TEAM
async function getOneTeam(req, res) {
  const teamData = await Team.find({ _id: req.params.id });
  res.status(200).json(teamData);
}

//////////////////////////////////////////////////////////////////////
//  ADDING A NEW TEAM
async function addNewTeam(req, res) {
  const newTeam = req.body.data;

  // Returing with 400 if data is undefinded
  if (!newTeam)
    return res
      .status(400)
      .json({ status: 'failed', message: 'Incorrect Data' });

  //  Removing all the unessary Data from the User about Players
  newTeam.players = newTeam.batsman = newTeam.bowler = newTeam.all_rounder = [];

  try {
    // Fetching all the Players Data
    const allPlayers = await Player.find({});

    allPlayers.forEach((player) => {
      // Putting the Players according to the team
      if (player.team === newTeam.teamName) newTeam.players.push(player);
      if (player.role === 'batsman' && player.team === newTeam.teamName)
        newTeam.batsman.push(player);
      if (player.role === 'bowlers' && player.team === newTeam.teamName)
        newTeam.bowlers.push(player);
      if (player.role === 'all_rounder' && player.team === newTeam.teamName)
        newTeam.all_rounder.push(player);
    });

    // Upersting the Team Dataj
    await Team.updateOne({ teamName: newTeam.teamName }, newTeam, {
      upsert: true,
    });

    return res.status(201).json({
      status: 'sucess',
      data: {},
    });

    // Catching any Kind of Error
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: Object.values(err.errors)[0].message && 'something went wrong',
    });
  }
}

//////////////////////////////////////////////////////////////////////
//  DELETING A TEAM

async function deleteTeam(req, res) {
  const { team_name } = req.query;
  const data = await Team.findOneAndDelete({ teamName: team_name });
  if (!data) {
    return res.status(400).json({ status: 'failed', message: 'NOT FOUND' });
  }
  return res.status(200).json({});
}

module.exports = {
  getAllTeams,
  addNewTeam,
  deleteTeam,
  getOneTeam,
};
