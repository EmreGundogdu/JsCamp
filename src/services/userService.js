export default class UserService { //export: dışarıdan import edilebilir anlamına geliyor(public gibi sanırım)   | default: userService import edildiğinde default olarak bu class import edilecek
    add(user) {
        console.log("Kullanıcı Eklendi: " + user)
    }
    list() {
        console.log("Kullanıcılar Listelendi")
    }
    getById(id) {
        console.log("Id'ye sahip kullanıcı")
    }
}