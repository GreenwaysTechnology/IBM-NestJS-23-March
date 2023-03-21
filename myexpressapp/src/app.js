const express = require('express')
const postRouter = require('./routers/post.router')

//create application object 
const app = express()

//bind router with app object 
app.use('/api/posts',postRouter)



//start server 
app.listen(3000, () => {
    console.log(`Express Server is running`)
})
