const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('./routes/users.js')

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '100mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());
require('./config/db')();

app.use('/user', userRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to our API');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));