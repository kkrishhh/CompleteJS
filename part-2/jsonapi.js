// destructuring the JSON API response and objects
const course = {
    courseName: "Introduction to JavaScript",
    price: "999",
    teacher: "hitesh"
}

const {teacher} = course;
console.log(teacher); // Output: hitesh

const {courseName, price} = course;
console.log(courseName); // Output: Introduction to JavaScript
console.log(price); // Output: 999