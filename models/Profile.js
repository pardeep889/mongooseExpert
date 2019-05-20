const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    firstName: {
         type: String,
         default: '',
         trim: true
    },
    lastName: {
        type: String,
        default: '',
        trim: true
    },
    age: {
        type: Number,
        default: 0
    },
    team: {
        type: String,
        default: '',
        trim: true
    },
    position:{
        type: String,
        default: '',
        trim: true
    }
});


const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;