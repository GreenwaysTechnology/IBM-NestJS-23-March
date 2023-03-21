const express = require('express')
const postService = require('../services/post.service')
//create router object 
const postRouter = express.Router()

postRouter.get('/', async (request, response) => {
    try {
        const posts = await postService.findAll()
        response.status(200).json(posts)
    }
    catch (err) {
        response.status(500).json(err)
    }
})

module.exports = postRouter