//singleton 
//  object literal
let users = {
    name : 'soham',
    weight: '60',
    email: "soh@gmail.com",
    isloggedin: true,

};

console.log(users.name);
console.log(users.weight);
console.log(users.email);
console.log(users.isloggedin);

users.email = "soham@gmail.com";
console.log(users.email);
Object.freeze(users)