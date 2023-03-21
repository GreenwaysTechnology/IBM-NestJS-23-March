import { POSTS } from '../mock-data/posts.js'

class PostService {

    //blocking list 
    // list() {
    //     return JSON.stringify(POSTS)
    // }
    //Non blocking api with callbacks
    // list(callback) {
    //    // return JSON.stringify(POSTS)
    //    setTimeout(callback,1000,JSON.stringify(POSTS))
    // }
    //non blocking with promise 
    list() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, JSON.stringify(POSTS))
        })
    }

}
export default PostService;