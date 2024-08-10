// var -> can be accessed globally 
// if (true) {
//     var a = 19;
// }
// a = " amito"
// console.log(a);

// //let -> can be accessed locally (local scope)
// if (true) {
//     let b = 12;
// }
// // console.log(b) // not working 

// // const -> cannot be re-assigned it is local  (its scope is also local)
// if (true) {
//     const c = "hello";
// }
// console.log(c)


// DataTypes 
// number - it includes all the numeric related datatypes and convert them 
let num1 = 9.29;
let num2 = 9.11;
console.log(num1 + num2);


// String 
let firstName = 'Amitosh';
let lastName = "verma"
console.log(firstName + " " + lastName);

//null
let value = null; // the value can be any so here null has some memory
console.log(value);

//undefined
let value2 = undefined; // it doesnt occupies any space 
console.log(value2);


//Objects -> properties of objects are seperated by commas
const person = {
    firstName: "test",
    lastName: "2",
    value: true
}
console.log(person);

// tips :
// js 1 = true | 0 = false
// true -> 1
// false -> 0

let col = true;
console.log(col + 10)

// type of operator -> tells what type of operator is 
console.log(typeof(person.value))
console.log("a" + 1)

// conditional statement
const age = 18; 
// if (age >= 18) {
//     console.log("that guy can vote !")
// }
// else if (age > 13) {
//     console.log("guy is teenage")
// }

// ternary Operator
let result = age >= 18 ? "yes" : "no";
console.log(result)

// switch cases
let a = 90;
let operator = '/';
let b = 22;
switch(operator) {
    case '+' : console.log(a + b);
    break;
    case '-' : console.log(a - b);
    break;
    case '*' : console.log(a * b);
    break;
    case '/' : console.log(a / b);
    break;
    default : console.log("idk");
}