// const amount = 12

// if(amount < 10){
//     console.log('small number');
// }else{
//     console.log('large number');
// }
// console.log('hey its my first node app.');

// console.log(__dirname)
// setInterval(()=>{
//     console.log('hello world')
// }, 300)

// JavaScript
// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// const originalString = "Hello, world!";
// const reversedString = reverseString(originalString);

// console.log("Original:", originalString);
// console.log("Reversed:", reversedString); // !dlrow ,olleH


const names = require('./4-names')
const sayHi = require('./5-utils')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

