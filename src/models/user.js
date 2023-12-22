const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;