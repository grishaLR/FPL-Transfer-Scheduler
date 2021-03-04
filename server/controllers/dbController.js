const Player = require('../models/fplModels');

const dbController = {};

dbController.getPlayers = (req, res, next) => {
  Player.create({
    playerName: req.body,
  });
};
