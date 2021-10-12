const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const userRoutes = require('./routes/users.js')
const userAction = require('./routes/userAction.js')

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '100mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());
app.use(express.json());
require('./config/db')();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');



app.use('/files', require('./routes/show'));
app.use('/user', userRoutes);
app.use('/api', userAction);
app.get('/', (req, res) => {
    res.send('Welcome to our API');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));