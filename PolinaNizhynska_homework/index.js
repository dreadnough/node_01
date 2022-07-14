//finding the sum 
// @param {number} definding a,b

let sum = ({a, b}) => {
return a + b
};

//finding the result of minuses of two objects 
//@param {number} definding a,b
let minus = ({a, b}) => {
return a - b;
};

//Finding multiplication result
//@param {number} definding a,b
let multiply = ({a, b}) => {
return a * b;
};

//Finding result of devide
//@param {number} definding a,b
let devide = (a, b) => {
return a / b;
};

// defindind text for functions slise 
const bearStr = "What to do if you see a bear while cycling?"

// Cuuting the sting
// @param {string} using bearStr
// @param {num} definding the beganing of slice 
// @param {num} definding the end of slice 

const cutStr = ({str, start, end}) => {
  return console.log(str.slice(start, end))
};
//Loining 3 strings
// @param {string} sting that will be joined 
const joinStrings = ({str1, str2, str3}) => {
  const arrStr = [str1, str2, str3].join(',');
  return console.log(arrStr);
};


//calling all functions
joinStrings({str1: "qqq", str2: "www", str3: "eee" });
cutStr({str: bearStr, start: 3, end: 8}); 
sum({a: 4, b:4});
multiply({a:3, b:6});
minus({a:9, b:4});
devide({a: 21, b:7});
