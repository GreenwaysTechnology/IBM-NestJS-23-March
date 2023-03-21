const express = require('express')

//create application object 
const app = express()

//REST API - GET,POST,PUT,DELETE
app.get('/api/posts', (request, response) => {
    response.status(200).json([{ id: 1, name: 'foo' }])
})
app.get('/api/todos', (request, response) => {
    response.status(200).json([{ id: 1, name: 'foo' }])
})

//start server 
app.listen(3000, () => {
    console.log(`Express Server is running`)
})
