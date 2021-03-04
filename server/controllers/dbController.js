const models = require('../models/fplModels');

const dbController = {};

dbController.getPlayers = (req, res, next) => {
  models.Player.find()
    .then((data) => {
      JSON.stringify(data);
      res.locals.players = data;
      console.log('res.locals: ', res.locals.players);
      return next();
    })
    .catch((err) => next({
      log: `Error in getPlayers middleware: ${err}`,
      message: { err: 'An error occurred' },
    }));
};

module.exports = dbController;
