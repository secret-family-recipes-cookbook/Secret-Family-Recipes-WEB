require('dotenv').config()

const server = require('./api/server.js')

const port = process.env.PORT || 2400

server.listen(port, () => {
    console.log(`\n*** Server up on http://localhost:${port} ***\n`)
});