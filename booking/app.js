'use strict'

const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')
const assert = require('assert')
const mongourl = ""
const dbName = 'test'

const findDocument = (db, criteria, callback) => {
    let cursor = db.collection('bookings').find(criteria);
    console.log(`findDocument: ${JSON.stringify(criteria)}`);
    cursor.toArray((err,docs) => {
        assert.equal(err,null);
        console.log(`findDocument: ${docs.length}`);
        callback(docs);
    });
}

app.get('/api/booking/:bookingid', (req,res) => {
    const client = new MongoClient(mongourl);
    client.connect((err) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);

        let criteria = {}
        criteria.bookingid = req.params.bookingid
        findDocument(db, criteria, (docs) => {
            client.close();
            console.log("Closed DB connection");
            res.status(200).json(docs)
        });
    });
})

module.exports = app