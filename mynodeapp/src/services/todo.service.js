//

class TodoService {
    constructor() {

    }
    findAll() {
        return [{ id: 1, status: true, action: 'learn Node' }]
    }
}
//export class
// module.exports = TodoService
//export object
module.exports = new TodoService() 