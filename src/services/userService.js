import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

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
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong User Type", user))
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
    // react - yup
    checkCustomerValidityForErrors(user) {
        let requiredFiles = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFiles) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem, ${field} is required`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }
        return hasErrors
    }
    checkEmployeeValidityForErrors(user) {
        let requiredFiles = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFiles) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem, ${field} is required`, user))
            }
        }
        return hasErrors
    }
}