import { users } from "../data/users.js"

export default class UserService { //export: dışarıdan import edilebilir anlamına geliyor(public gibi sanırım)   | default: userService import edildiğinde default olarak bu class import edilecek

    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }
    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    this.customers.push(user)
                    break;
                case "employee":
                    this.employees.push(user)
                    break;
                default:
                    this.errors.push("Wrong User Type")
                    break;
            }
        }
    }
    add(user) {
        //this.users.push(user)
        this.loggerService.log(user)
    }
    list() {
        //return this.users
    }
    getById(id) {
        //return this.users.find(user => user.id == id)
    }
}