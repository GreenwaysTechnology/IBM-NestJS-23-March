require('dotenv').config()
const express = require('express')

const app = express();

const message = process.env.MESSAGE || 'Default Message'
const port = process.env.PORT || 3000

app.get("/users", (req, res) => {
    res.end(message)
})

app.listen(port, () => {
    console.log('Express Server is running at ', port)
})