// 1- string
// to run this code you have to write in cmd npx tsc datatypes.ts
var lname;
lname = 'yash';
var newName = lname.toUpperCase();
console.log(newName);
// 2- number
var age;
age = 20;
var result = age + 10;
var dob = "05";
var resp = parseInt(dob);
console.log(result);
console.log(resp);
// 3- boolean
var isValid;
isValid = true;
console.log(isValid);
// 4- array 
var emplis;
var emplist;
var numList;
emplis = ['yash', 'baby'];
numList = [1, 2, 3];
var results = numList.filter(function (num) { return num > 2; });
var reducee = numList.reduce(function (acc, num) { return acc + num; });
console.log(emplis);
console.log(numList);
console.log(results);
console.log(reducee);
