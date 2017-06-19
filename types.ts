//VERY BASIC COMMANDS TO GET STARTED
/*
npm install -g typescript
tsc main.ts
tsc main.ts -w : Watch mode and no need no compile everytime.
*/

/*Variable Types in TypeScript :
string,number,boolean,Array,Any,Void,Null,Tuple(An array with finite number of objects),Enum,Generics
*/

let myString : string;
let myNum : number;
let myBool: boolean;
let myVar : any; // Can be absolutely anything
/*
let strArr : string[]; //Represents an array of strings 
let numArr : number[]; //Array of numbers
let boolArr : boolean[]; //Array of booleans
*/

//ALTERNATIVE WAY TO DEFINE ARRAYS

let strArr : Array<string> ; //Again this represents an array of Strings
let numArr : Array<number>;
let boolArr : Array<boolean>;
//Tuples
let strNumTuple : [string,number];

myString = "Hello World";
myNum = 22; //myNum = 0xf00d(61453) // Can accept hexadecimal values
myBool = true;
myVar = true; /* This can be absolutely anything*/
myVar = 55;
myVar = 'Rahul Bhatia';                                 
strArr = ["Apple","Pinneapple","Orange","Strawberry"]; 

strNumTuple = ["Hello",4];
strNumTuple = ["Hello",4,3,2,3,1]; //completely fine. Just it should match the pattern

//console.log(strNumTuple);
//Void
let myVoid : void = null;
myVoid = undefined;

let myNull : null = null;
let myUndefined : undefined = null; //Yes...it works!!

console.log(myVoid);
