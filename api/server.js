const express = require('express')

const server = express();

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'its a go'})
})

module.exports = server;