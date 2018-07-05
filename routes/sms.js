const express = require('express');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');
const socketio = require('socket.io');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const verify = require('../config/verify');



// Init Nexmo
const nexmo = new Nexmo({
    apiKey: 'ad88b3c0',
    apiSecret: 'HbjkDiFJtqcQbN5f'
}, { debug: true });







// Catch form submit
app.post('/', (req, res) => {
    // res.send(req.body);
    // console.log(req.body);
    const from = 'Nexmo';
    const number = req.body.number;
    const text = req.body.text;

    nexmo.message.sendSms(from, number, text, { type: 'unicode' },
        (err, responseData) => {
            if (err) {
                console.log(err);
            } else {
                console.dir(responseData);
                // Get data from response
                const data = {
                    id: responseData.messages[0]['message-id'],
                    number: responseData.messages[0]['to']
                }

                // Emit to the client
                io.emit('smsStatus', data);
            }
        }
    );
});



