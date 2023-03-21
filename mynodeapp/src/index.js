import { createServer } from 'node:http'
import PostService from './services/post.service.js'

const postService = new PostService()

//create server,write code to get request and process
const server = createServer(async (request, response) => {
    //response.end('Hello')
    response
        .writeHead(200, {
            'Content-Type': 'application/json',
        })

    //response.end(postService.list())
    //callback based 
    // postService.list(posts => {
    //     response.end(posts)
    // })
    //promise based 
    // postService.list()
    //     .then(posts => {
    //         response.end(posts)
    //     }).catch(err => {
    //         response.end({ err: err })
    //     })
    //async ...await
    try {
        const posts = await postService.list()
        response.end(posts)
    }
    catch (err) {
        response.end({ err: err })
    }
})

//how to start server
server.listen(3000, () => {
    console.log('HTTP server is running!')
})