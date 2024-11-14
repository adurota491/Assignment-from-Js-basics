// operators are special symbols that performs operations on one or more 
// files in our js file system.

// 1. Arithmetic operations
// addition
let sum= 5 + 3;
console.log(sum);

//subtractions
let difference = 10 - sum;
console.log(difference)

// multiplication
let product = sum * difference;
console.log(product)

// division
let quotient=product /4;
console.log(quotient)

// modulus
let remainder =quotient % 3;
console.log(remainder);


//  Assignment operators
// These operators assign values to variables.


// assignment
let x = 5;
console.log(x)
// The assignment simply makes it to input the log into it.

// addition assignment
let y = 5;
y += 1;
console.log(y)

// THis just adds the nukmber one together  with it  so the += means you carry the number one along.

// subtraction assignment
let z = 10;
z -= y;
console.log(z)

// 3. Comparison Operators
// These operators compare values and return  a boolean value

// Equal 
console.log(5 == "5")

// strict Equal 
console.log(5 === "5")

// NOt Equal
console.log(5!= "5")

// Strict Not Equal 
console.log(5 !== "5")

// not equal
console.log(5 !='5')
 let n= 3
 let q= 2

 console.log(n != q)

//  strict not equal
console.log(5 !=='5')
let u = "martins"
let o = 10
console.log(u !== o)

// Greater than 
console.log(10>5)
let g=12
let k=10
let s= g+k
console.log(k>g)

// less than
console.log(3 <8)
let a=6
let d=4
let w=a-d
console.log(s<d)

// greater than ad equal 
console.log(4 >= 5);
let j=6
let v=6
let m =j * 2
console.log(j >= v)

let t =v-3
 
console.log( m >= t)
// >= THis sign simply means that either it is greater or equal the value compared side by side must work together
// so t=v(6)-3=3
// m=j(6) x 2=12

// total( m>=t)
// 12>=3 i.e 12 is greater than or equal to 3 which is true if you open it in your live ServiceWorkerRegistration


 
// using logical operators declare four variables that logs boolean value on console.
// using comments on the vs code editor, explain the meaning and how it functions .

// CONTINUATION Today Thursday 7th November 2024.

const hasDriverLicense =true;
const hasInsurance = true;

const carDrive = hasDriverLicense && hasInsurance
console.log(carDrive)

// This means the person must have the two i.e the Driver License and the Insurance before he can Driver

// THe AND is very strict because the two must be true before it can return true but if anyone has false,it will return false

const isAdult =true;
const isHungry = false;

const canEnter =isAdult && isHungry;
console.log(canEnter
)

//  ||(OR) Operator
const Knowsjscript = false; 
const KnowPython =  true;
const canDesignWebsite =  Knowsjscript || KnowPython;
console.log(canDesignWebsite);

// NB: The symbol for OR is ||


// For the OR operators, if anyone is True, it will print out true 

const isAdmin =false;
const isSuperUser =false;
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage)


// NEXT TOPIC: CONTROLLED STRUCTURED
