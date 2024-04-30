//document.getElementById("title").innerHTML = "Javascript";

console.log("Hello World");

//string

let myName = "John";
console.log(myName);

//numbers

let x = 3;
let g = 5;
console.log(x);

x += g;
console.log(x);
console.log(g)

//object

let cup = {
    color: "Blue",
    price: 50,
    type: "Ceramic",
    new: true
};

//array
let myArr = ["apple", "orange", "pineapple", 20, true];
console.log(myArr);

document.getElementById("heading1").innerHTML = "Welcome JavaScript";
document.getElementById("heading1").style.color = "red";
document.getElementById("heading1").style.fontSize = "60px";
document.getElementById("heading1").style.fontFamily = "pacific";

function alertMe() {
    return alert("Welcome to javascript");
}