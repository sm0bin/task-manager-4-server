const Todo = require('../models/todo');
// const asyncHandler = require('../utils/asyncHandler');

// get all todos
// const getAllTodos = async (req, res, next) => {
//     try {
//         const todos = await Todo.find();
//         res.status(200).json(todos);
//     } catch (err) {
//         next(err);
//     }
// };
const getAllTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find({ email: req.params.email });
        res.status(200).json(todos);
    } catch (err) {
        next(err);
    }
};

// get a todo
const getTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo);
    } catch (err) {
        next(err);
    }
};

// create a todo
const createTodo = async (req, res, next) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (err) {
        next(err);
    }
};

// update a todo
const updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

// delete a todo
const deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Todo.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
};

