class user {
    constructor(username){
        this.username = username
    }

    printme(){
        console.log(`username : ${this.username}`);
     }

    static createId(){
        return `123`
     }
     
}

const soham = new user("soham")
// console.log(soham.createId());

class teacher extends user {
    constructor( username, email){
        super(username)
        this.email = email;
    }
}

const snehal = new teacher("snehal","abc@gmail.com")
snehal.printme();