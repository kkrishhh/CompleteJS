let myheros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);      
    },
    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
        
    }
}

//old syntax

const teacher ={
    makeVideos : true,

}

const teachingAssistant = {
    isAvailable : false 
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: teachingAssistant
}

const User ={
    name: 'soham',
    email: 'soham@gmail.com'
}

teacher.__proto__ = User

// new syntax

Object.setPrototypeOf(teachingAssistant, teacher)

let myname = 'soham    '
console.log();

String.prototype.truelength = function(){

 console.log(`true length is ${this.trim().length}`)
}

myname.truelength()
