
//const TodoService = require('./services/todo.service')
const todoService = require('./services/todo.service')
function main() {
    //    let todoService = new TodoService();
    console.log(todoService.findAll())
}
main()