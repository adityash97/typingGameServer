const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully !');
});

const userRouter = require('./controller/userController');
app.use('/user', userRouter);

app.get('/',(req, res) => { 
    res.send({'Hi':'Chirag'});
});

app.listen(port, () => {
    console.log(`Server started running on port : ${port}`);
});