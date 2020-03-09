let x = 10;
let y = 3;
let z = 20;
let c = 30;
const v = 40;


//basic Arithmetic Operators

console.log("sum = ",x % y);
console.log("sum = ",x / y);
console.log("sum = ",x * y);
console.log("sum = ",x - y);
console.log("sum = ",x ** y);
console.log("sum = ",x + y);

//increments 

console.log("sum =",++z);
console.log("sum =",++z); //Pre Increment - inceases by one then returns "Z"

console.log("sum =",c);
console.log("sum =",c++);
console.log("Sum =",c++); //Post Increment - returns "c" then the increment

console.log("Sum =",v)  /*the reason "v" would become an error is the "const" variable can not be pre or post 
incremented because of the constant command that is used. */

let q = 10;
let w = 20;
let i = 100;

console.log("pre-Decrement");

w = ++q;

console.log(q);
console.log(w);

console.log("post-Decrement");
 
for(let i=0; i<=100; i++)
{
console.log(i);
}