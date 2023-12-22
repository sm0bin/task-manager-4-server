const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:email', verifyToken, todoController.getAllTodos);
router.get('/todo/:id', verifyToken, todoController.getTodo);
router.post('/', verifyToken, todoController.createTodo);
router.put('/:id', verifyToken, todoController.updateTodo);
router.delete('/:id', verifyToken, todoController.deleteTodo);

module.exports = router;
