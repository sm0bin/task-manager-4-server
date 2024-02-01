const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
    },
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        trim: true,
        maxlength: [64, 'Title cannot be more than 64 characters']
    },
    details: {
        type: String,
        required: [true, 'Please enter details'],
        trim: true,
        maxlength: [512, 'Details cannot be more than 512 characters']
    },
    deadline: {
        type: Date,
        required: [true, 'Please enter a deadline']
    },
    state: {
        type: String,
        required: [true, 'Please enter a state'],
        enum: ['To Do', 'Ongoing', 'Completed']
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;


// email
// title
// details
// deadline
// state
