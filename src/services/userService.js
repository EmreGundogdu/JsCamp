export default class UserService { //export: dışarıdan import edilebilir anlamına geliyor(public gibi sanırım)   | default: userService import edildiğinde default olarak bu class import edilecek

    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }
    add(user) {
        this.users.push(user)
        this.loggerService.log(user)
    }
    list() {
        return this.users
    }
    getById(id) {
        return this.users.find(user => user.id == id)
    }
}