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

//forLoop 

console.log("pre-Decrement");

w = ++q;

console.log(q);
console.log(w);

console.log("post-Decrement");
 
for(let i=0; i<=30; i++)
{
console.log(i);
}

let e = 1;
let r = 1;

console.log(e);
console.log(10 * ++e);
console.log(e);
console.log(10 * ++e)
console.log(e);
console.log(10 * ++e);
console.log(e);

console.log(r);
console.log(10 * r++);
console.log(r)
console.log(10 * r++)
console.log(r)
console.log(10 * r++);
console.log(r);

const firstWord = "Hello"
const secondWord = "World"
 
//spaces in text using "`" key.

console.log(firstWord + secondWord);
console.log(`${firstWord} ${secondWord}`);
//example
console.log(`${y + x} + ${z + c} =`, 13 + 54);

console.log(10 - 5);
console.log(10 - `5`);


console.log("comma in a variable")
let t =(1 + 2, 3 * 4);
console.log(t);
console.log(y + y, x * q);


//asign 
let g = 10;
console.log(g);
//add and assign
g += 20;
console.log(g);
//subtract and assign
g -= 10;
console.log(g);
//multiply and assign
g *= 10
console.log(g);
//devide and assign
g /= 10
console.log(g);
//devide and assign modulus
g %= 10
console.log(g);

g **= 10
console.log(g);



