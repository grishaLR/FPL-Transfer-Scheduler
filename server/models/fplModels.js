const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://grishaLR:asdf@cluster0.cvz80.mongodb.net/cluster-0?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'cluster-0',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const playerSchema = new Schema({
  playerName: { type: String, required: true, unique: true },
});

const teamSchema = new Schema({
  playerName: { type: String, required: true, unique: true },
});

const Player = mongoose.model('player', playerSchema);
const Team = mongoose.model('team', teamSchema);
module.exports = { Player, Team };
