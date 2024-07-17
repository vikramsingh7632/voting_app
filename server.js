require('dotenv').config();
const express = require('express')
const app = express();
const db = require('./db');

const PORT = process.env.PORT;

app.use(express.json());

// const { jwtAuthMiddleware } = require('./jwt');

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');


// Use the routers
app.use('/user', userRoutes);
app.use('/candidate',candidateRoutes);


app.listen(PORT, ()=>{
    console.log('listening on port ',PORT);
});