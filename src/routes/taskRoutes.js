const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:email', verifyToken, taskController.getAllTasks);
router.get('/task/:id', verifyToken, taskController.getTask);
router.post('/', verifyToken, taskController.createTask);
router.put('/:id', verifyToken, taskController.updateTask);
router.delete('/:id', verifyToken, taskController.deleteTask);

module.exports = router;
