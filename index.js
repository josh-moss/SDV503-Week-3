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

//forLoop can executes a code block a number of times.

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


//comparison operator compares two values

if ( x !== z ) {
    console.log(`Same numbers`);
    }
    
console.log(x)
console.log(z)

console.log(10 == 5);
console.log(10 != 5);
console.log(10 < 5);
console.log(10 > 5);
console.log(10 <= 5);
console.log(10 >= 5);

console.log(10 == 5)//equal to
console.log(10 == 10);
console.log(10 != 5);//not equal to
console.log(10 != 10);
console.log(10 < 5);//less than
console.log(10 < 10);
console.log(10 > 5);//greater than
console.log(10 > 10);

//Boolean and Number Comparison

console.log(true == 1);
console.log(true ==`1`);
console.log(true == 0);
console.log(false == 1);
console.log(false == 0);
console.log(false == `0`);

console.log( "  ");

console.log(true != 1);
console.log(true !=`1`);
console.log(true != 0);
console.log(false != 1);
console.log(false != 0);
console.log(false !=`0`)

//strings are compared letter by letter

console.log(`Raise` > `Race`);
console.log(`Break` > "brake");
console.log(`lose` < "loose");

//unicode order "a" is greater than "A"

console.log(`A` == `a`);

console.log(1 == "1"); //Equality : sting converted to number, so true
console.log(1 === "1"); //Strict equality : checks datatype, 1 is string and number, so false
console.log("");

console.log(1 == true); //true is converted to "1", so true.
console.log(1 === true); //Strict equality : same as above with datatypes, being same, so false.
console.log("");

console.log(0 == false); // same as above
console.log(0 === false);

//Null undefined

console.log(null == 0);
console.log(null === 0);
console.log(null > 0); //null can not be greater than itself so its false.
console.log(null < 0); // this is false cause null cannot be less than null.
console.log(null >= 0); //null is assined to null so null cant be greater or lesser than itself, so true.
console.log("")
console.log(undefined == null);
console.log(undefined === null);
console.log("");
console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(null + 1);// null acts as "0" still, so the result would be 0 + 1 = 1
console.log(undefined > 0);//undefined is not a number so therefore you cannot be greater than 0.
console.log(undefined + 1);//not a number.

/* logical opertators -compares values, any types of vales can be compared using these operators.
the three logical operators are. Or (||), AND (&&) and NOT (!) */

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(1 || 1);
console.log(1 || 0);
console.log(0 || 1);
console.log(0 || 0);


