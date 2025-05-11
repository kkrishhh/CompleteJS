const myarr = [0,1,2,3,4,5,6];
const myarr2 = ["locae","shaha","zubui"];
//console.log(myarr2[2]);

myarr.push(7);
//console.log(myarr);

myarr.pop();
//console.log(myarr2);

myarr.unshift(22);
console.log(myarr);
myarr.shift();
console.log(myarr);

//slice spice

console.log(myarr.slice(1,3));
console.log(myarr.splice(2,5));

const superstar = ['soham, laddo, jalebi, xijin, messiah']
console.log(superstar.concat(myarr));

