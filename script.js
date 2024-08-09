// var -> can be accessed globally 
if (true) {
    var a = 19;
}
a = " amito"
console.log(a);

//let -> can be accessed locally (local scope)
if (true) {
    let b = 12;
}
// console.log(b) // not working 

// const -> cannot be re-assigned it is local  (its scope is also local)
if (true) {
    const c = "hello";
}
console.log(c)

