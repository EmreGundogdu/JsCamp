import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

//
// let customer = { id: 1, firstName: "Emre" }
// customer.lastName = "Gundogdu"
// console.log(customer.lastName)

let logger1 = new ElasticLogger()

let userService = new UserService(logger1) //class nesnesi alma

let user1 = new User(1, "Emre", "Gündoğdu", "Eskişehir")
let user2 = new User(2, "Mert", "Akar", "Eskişehir")
userService.add(user1)
userService.add(user2)
console.log(userService.list())
console.log(userService.getById(1))


console.log("--------------------")
userService.load()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)


