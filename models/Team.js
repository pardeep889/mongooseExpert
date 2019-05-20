const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({

});


const Team = mongoose.model('Team', teamSchema);

module.exports = Team;