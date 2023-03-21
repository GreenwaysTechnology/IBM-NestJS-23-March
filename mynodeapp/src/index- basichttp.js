import { createServer } from 'node:http'

//create server,write code to get request and process
const server = createServer((request, response) => {
    response.end('Hello')
})

//how to start server
server.listen(3000, () => {
    console.log('HTTP server is running!')
})