function sum(a, b){
    const sumValue = a + b;
    return sumValue;
}

const value = sum( 5, 9);
console.log(value)

function mul( a, b){
    const mulValues = a * b;
    return mulValues;
}

let multiply = mul( 4, 5);
console.log(multiply);

function stringLength(string){
    console.log("original string", string);
    console.log("length: ", string.length);
}

stringLength("soham");