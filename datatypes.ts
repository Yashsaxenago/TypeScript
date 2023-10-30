// 1- string

// to run this code you have to write in cmd npx tsc datatypes.ts

let lname :string;
lname='yash';
let newName=lname.toUpperCase();
console.log(newName);

// 2- number

let age :number;
age=20;
let result = age+10;
let dob="05";
let resp=parseInt(dob);
console.log(result);
console.log(resp);

// 3- boolean

let isValid:boolean;
isValid=true;
console.log(isValid);

// 4- array 

let emplis:string[];
let emplist:Array<string>;
let numList:Array<number>;
emplis=['yash','baby'];
numList=[1,2,3];
let results=numList.filter((num)=>num>2);
let reducee=numList.reduce((acc,num)=>acc+num);
console.log(emplis);
console.log(numList);
console.log(results);
console.log(reducee);


// 5- enum 
const enum Color
{
    red,
    yellow,
    white
}
let c:Color=Color.red;

// tuples

// any

let department:any;  // not use any data types always use correct data types
department="it";
department=10;

// void 
// never