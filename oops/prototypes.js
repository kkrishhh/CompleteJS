function multiplyby5(x){
    return x*5
}

multiplyby5.power = 2
console.log(multiplyby5(5));
console.log(multiplyby5.power);


function createUSer(username, score){
    this.username = username
    this.score = score
}

createUSer.prototype.increment = function (){
    this.score++
    // this = jisne bhi usko bulaya ho 
}

    

const chai = new createUSer("chai", 25)
const tea = new createUSer("tea", 25)

createUSer.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

chai.printMe();