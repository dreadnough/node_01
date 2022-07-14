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


//Homewokr adding arrays

const numArr = [1, 2, 3, 4, 5, 6, 7];

const projectArr = [
  {
    userId: 1,
    firstName: "Alex",
    lastName: "Melnyk",
    userPhone: "0955555555",
    userCity: "Kyiv",
},
{
    userId: 2,
    firstName: "Yana",
    lastName: "Honchar",
    userPhone: "0639999999",
    userCity: "Georgia",
},
{
    userId: 3,
    firstName: "Sofiia",
    lastName: "Madryha",
    userPhone: "0673400000",
    userCity: "Ivano-Frankivsk",
},
{
    userId: 4,
    firstName: "Halyna",
    lastName: "Horbiak",
    userPhone: "0987127826",
    userCity: "Lviv",
},
{
    userId: 5,
    firstName: "Polina",
    lastName: "Nizhynska",
    userPhone: "0974768236",
    userCity: "Lviv",
},
{
    userId: 6,
    firstName: "Volodymyr",
    lastName: "Zvirko",
    userPhone: "0505903504",
    userCity: "Lviv",
},
{
    userId: 7,
    firstName: "Volodymyr",
    lastName: "Zaritskyi",
    userPhone: "0630742682",
    userCity: "Lviv",
}

];

// Using find method
const findName = projectArr.find( ({ firstName }) => firstName === "Halyna");
console.log(findName);

// Using filter method

const FindCity = projectArr.filter(({userCity}) => userCity === "Lviv");
console.log(FindCity);

// Using map method

const doubles = numArr.map((num) => num * 2);
console.log(doubles);

// Using shift method
const fistUser = projectArr.shift();

console.log(fistUser);

// Using reverse method

const reverseNum = numbers.reverse()

console.log(reverseNum);