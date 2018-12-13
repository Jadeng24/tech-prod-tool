require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    axios = require('axios'),
    mail_controller = require('./controllers/mail_controller');


const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

//=====| ENDPOINTS |==================================

//---Send message through nodemailer---/

// for setting up online
const path = require('path')
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 8085;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));