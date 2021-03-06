const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/users')

const app = express();

require('dotenv').config();

const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI,
    {useNewUrlParser: true,useUnifiedTopology: true },()=>console.log('connected to db'));



app.use('/exercises', exerciseRouter);
app.use('/users',userRouter);

app.listen(port,()=>{
    console.log('Server is running on port: '+ port);
})




