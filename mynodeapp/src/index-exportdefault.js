import { firstName } from "./mynewlib.js";
import UserService from "./services/user.service.js";
console.log(firstName)

let userService = new UserService()
console.log(userService.findAllUsers())