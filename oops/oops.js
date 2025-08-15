const username = {
    username: 'soham',
    loginCount: 8,
    signedin: true,
    getUserDetail: function(){
        console.log("getting user details from database");
        console.log(this.username);
        return "got user details from database";
        
    }
}

console.log(username.username);
console.log(username.getUserDetail());

