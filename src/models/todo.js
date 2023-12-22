const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
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
    priority: {
        type: String,
        required: [true, 'Please enter a priority'],
        enum: ['Low', 'Moderate', 'High']
    },
    state: {
        type: String,
        required: [true, 'Please enter a state'],
        enum: ['To Do', 'Ongoing', 'Completed']
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;


// email
// title
// details
// deadline
// priority
// state
