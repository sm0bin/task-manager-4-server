const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const errorHandler = require('./src/utils/errorHandlers');
const todoRoutes = require('./src/routes/todoRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 5500;

// database connection
mongoose.connect(process.env.DB_URI)
    .then(() => { console.log("Connection successful.") })
    .catch((err) => { console.log(err) })


// middleware
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    await res.send('Hello to the Task Manager API');
});

// routes
app.use('/todo', todoRoutes);

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})
