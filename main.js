//VERY BASIC COMMANDS TO GET STARTED
/*
npm install -g typescript
tsc main.ts
tsc main.ts -w : Watch mode and no need no compile everytime.
*/
/*Variable Types in TypeScript :
string,number,boolean,Array,Any,Void,Null,Tuple(An array with finite number of objects),Enum,Generics
*/
var myString;
var myNum;
var myBool;
var myVar; // Can be absolutely anything
/*
let strArr : string[]; //Represents an array of strings
let numArr : number[]; //Array of numbers
let boolArr : boolean[]; //Array of booleans
*/
//ALTERNATIVE WAY TO DEFINE ARRAYS
var strArr; //Again this represents an array of Strings
var numArr;
var boolArr;
//Tuples
var strNumTuple;
myString = "Hello World";
myNum = 22; //myNum = 0xf00d(61453) // Can accept hexadecimal values
myBool = true;
myVar = true; /* This can be absolutely anything*/
myVar = 55;
myVar = 'Rahul Bhatia';
strArr = ["Apple", "Pinneapple", "Orange", "Strawberry"];
strNumTuple = ["Hello", 4];
strNumTuple = ["Hello", 4, 3, 2, 3, 1]; //completely fine. Just it should match the pattern
//console.log(strNumTuple);
//Void
var myVoid = null;
myVoid = undefined;
var myNull = null;
var myUndefined = null; //Yes...it works!!
console.log(myVoid);
