// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
// Use express.json() to get data into json format
app.use(express.json());

// Use port 3001 for server
const PORT = process.env.PORT || 3001;

app.use(cors());

// Import routes
const TodoItemRoute = require('./routes/todoItems');

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT)
    .then(()=> console.log("Database connected"))
    .catch(err => console.log(err))

app.use('/', TodoItemRoute);

// Listening on Port 3001
app.listen(PORT, ()=> console.log("Server connected") );