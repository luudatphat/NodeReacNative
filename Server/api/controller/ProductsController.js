const util          = require('util')
const mysql         = require('mysql')
const db            = require('./../db')
var webpush         = require('web-push');

const publicVapidKey =
    'BBaRe_WVzBB1_h22wv-wiujenDCqWCA0tqCxqkqQ9IZsqEV_1GaKXV5WCK3SZkAwn0axpYZpSb-UzsapM2-yluk';
const privateVapidKey =
    '8gd7yrohCo4zvecT3wOxMzI9NmBLVz5pquy7_WzoA68';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

console.log('Connet Controller ')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM user'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.render("index", {
                title: 'Test',
                value: response,
            });
            // res.json(response)
        })
    },
    getpush: (req,res) =>{
        res.render("push"); 
    },
    postpush: (req, res) => {
        // Get pushSubscription object
        const subscription = req.body;
        // Send 201 - resource created
        res.status(201).json({});

        // Create payload
        const payload = JSON.stringify({ title: "Push Test" });

        // Pass object into sendNotification
        webpush
            .sendNotification(subscription, payload)
            .catch(err => console.error(err));
    },
};