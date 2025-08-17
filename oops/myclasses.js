class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changedUsername(){
    return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "soham6218@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changedUsername());


//behind the scene 

function userNames(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
     return `${this.password}abc`
}


const soham = new user("soham", "soham6218@gmail.com", "123")

console.log(soham.changedUsername());
