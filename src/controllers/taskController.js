const Task = require('../models/task');
// const asyncHandler = require('../utils/asyncHandler');

// get all tasks
// const getAllTasks = async (req, res, next) => {
//     try {
//         const tasks = await Task.find();
//         res.status(200).json(tasks);
//     } catch (err) {
//         next(err);
//     }
// };
const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({ email: req.params.email });
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
};

// get a task
const getTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

// create a task
const createTask = async (req, res, next) => {
    try {
        console.log(req.body)
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        console.error(err.message)
        next(err);
    }
};

// update a task
const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(req.body, id)
        const result = await Task.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(result);
    } catch (err) {
        next(err);
        console.error(err.message)
    }
};

// delete a task
const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Task.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};

