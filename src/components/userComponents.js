import UserService from "../services/userService.js"

console.log("User Component Yüklendi")

let userService = new UserService //class nesnesi alma

userService.add()
userService.getById(1)
userService.list()