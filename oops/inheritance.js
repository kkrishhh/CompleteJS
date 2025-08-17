class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username, email, password){
       super(username) 
       this.email = email
       this.password = password
        
    }

    addCourses(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const soham = new teacher("soham", "teacher.com", "123")

soham.addCourses()

const rustdev = new user("rustdev")

rustdev.logMe()
