const POSTS = require('../mock-data/posts')

class PostService {

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, POSTS)
        })
    }

}
module.exports = new PostService()
