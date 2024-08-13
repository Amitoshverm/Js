// // var -> can be accessed globally 
// // if (true) {
// //     var a = 19;
// // }
// // a = " amito"
// // console.log(a);

// // //let -> can be accessed locally (local scope)
// // if (true) {
// //     let b = 12;
// // }
// // // console.log(b) // not working 

// // // const -> cannot be re-assigned it is local  (its scope is also local)
// // if (true) {
// //     const c = "hello";
// // }
// // console.log(c)


// // DataTypes 
// // number - it includes all the numeric related datatypes and convert them 
// let num1 = 9.29;
// let num2 = 9.11;
// console.log(num1 + num2);


// // String 
// let firstName = 'Amitosh';
// let lastName = "verma"
// console.log(firstName + " " + lastName);

// //null
// let value = null; // the value can be any so here null has some memory
// console.log(value);

// //undefined
// let value2 = undefined; // it doesnt occupies any space 
// console.log(value2);


// //Objects -> properties of objects are seperated by commas
// const person = {
//     firstName: "test",
//     lastName: "2",
//     value: true
// }
// console.log(person);

// // tips :
// // js 1 = true | 0 = false
// // true -> 1
// // false -> 0

// let col = true;
// console.log(col + 10)

// // type of operator -> tells what type of operator is 
// console.log(typeof(person.value))
// console.log("a" + 1)

// // conditional statement
// const age = 18; 
// // if (age >= 18) {
// //     console.log("that guy can vote !")
// // }
// // else if (age > 13) {
// //     console.log("guy is teenage")
// // }

// // ternary Operator
// let result = age >= 18 ? "yes" : "no";
// console.log(result)

// // switch cases
// let a = 90;
// let operator = '/';
// let b = 22;
// switch(operator) {
//     case '+' : console.log(a + b);
//     break;
//     case '-' : console.log(a - b);
//     break;
//     case '*' : console.log(a * b);
//     break;
//     case '/' : console.log(a / b);
//     break;
//     default : console.log("idk");
// }

// loops 
// for (let i = 1 ; i <= 10; i++) {
//     console.log("Amitosh" + " " + i);
// }

// functions 
// function multiply(num1, num2) {
//     return num1 * num2;
// }

// let a = multiply(3, 5);
// console.log("value of function is :" + a)


// arguments word is used argument is a build in object
// function addAnyNumber() {
//     let ans = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         ans += arguments[i];
//     }
//     return ans;
// }

// console.log(addAnyNumber(1, 2, 3 ,4, 5))
// // another method is using spread operator (...)

// function addAnyNumbers(...nums) {
//     let ans = 0;
//     for (let i = 0; i < nums.length; i++) {
//         ans += nums[i];
//     }
//     return ans;
// }
// console.log(addAnyNumbers(1, 2, 3, 4, 5, 66))

// !arrow functions 
// let hello = () => {
//     return 'hello';
// }
// console.log(hello())

// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(1, 4))

// const oneLinerAdd = (a, b) => a + b;
// console.log(oneLinerAdd(6,5));

// ! arguments operator is not avaliable for arrow functions

// let check = () => {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }
// check(1, 2, 4) // not working 

// * spread operator will work in arrow functions 

// let checkSpread = (...group) => {
//     console.log(group);
// }
// checkSpread("hellow", "how", "are", "you")


// * arrow functions are not hoisted example ->

// yo(); // we can access out function before being made thats hoisting

// function yo() {
//     console.log("hello");
// }

// ! but if we try to do this in arrow functions we will get an error

// yo(); // wont work 

// let yo = () => {
//     console.log('hello');
// }



// * high order fuction and call backs

// function add(a, b, ab) {
//     let result = a + b;
//     console.log(result)
//     ab(result);
// }

// function ab(result) {
//    console.log("hello")
// }
// add(1, 4, ab);

// console.log()

// // * arrays

// const students = ["test1", "test2", "test3"];

// let i = 0, j = students.length-1;
// while (i < j) {
//     let temp = students[i];
//     students[i] = students[j];
//     students[j] = temp;
//     i++;
//     j--;
// }
// console.log(students);

// const students = [1, 2, 3, 4, 5, 6];

// students.forEach(val => {
//     console.log(3 * val)
// })

// function double(n) {
//     return n * 2;
// }
// let arr = [];
// for (var i = 0; i < students.length; i++) {
//     arr[i] = students[i] * 3;
// }
// console.log(arr);

let s = "123";

var isPlaindrome = function(s) {
    const newStr = s.toLowerCase();
    let l = 0, r = s.length-1;

    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

console.log(isPlaindrome(s))
console.log(s);