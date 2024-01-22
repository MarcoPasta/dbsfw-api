const express = require('express')
const server = express()
const port = 3000

let counter = 0

server.get('/', (req, res) => {
    res.send('Hello Sorld!, Counter : ' + counter)
    counter += 1
})

server.listen(port, () => {
    console.log('Example App listening on port: ' + port)
})
