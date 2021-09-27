const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');

const app = express();
dotenv.config();
app.use(bodyParser.json({limit:'100mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'100mb',extended:true}));
app.use(cors());
require('./config/db')();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));