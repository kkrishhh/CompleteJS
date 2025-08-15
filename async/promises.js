const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    // db calls , networking, cryptography
    setTimeout(function(){
       console.log("async task has taken place");
        resolve()
    }, 1000)
        
})

promiseOne.then(function(){
    console.log("this is happening after the promise is resolved")
})
// another way of doing it without using variables

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("lets finish promise")
        resolve()
    }, 1000)

}).then(function(){
    console.log("promise has been resolved")
})
//lets pass some data 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'soham', email:'soham6218@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user.email)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'soham', email:'sam@sbc.com'})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then()

