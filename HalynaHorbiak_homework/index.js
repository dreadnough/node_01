//calculates the sum of numbers
let sum = (a, b) => a + b;
  console.log(sum(5,4));

//calculates the difference of numbers  
  let minus = (a, b) => a - b;
    console.log(minus(5,4));

//counts the multiplication of numbers
    let mnozenia = (a, b) => a * b;
    console.log(mnozenia(5,4));

//calculates division of numbers
    let dilenia = (a, b) => a / b;
    console.log(dilenia(5,4));

//Adding 3 strings into one!     
    const Adding = ({ first_string, second_string, third_string}) => {
        return `${first_string} ${second_string} ${third_string}`;
    };
    console.log(Adding({
        first_string: "Lorem ipsum dolor sit",
        second_string: "amet consectetur elit",
        third_string: "Accusantium laboriosam deserunt ",
        })
    );

//Cutting out of string
const str = 'est amet nulla dolorem laudantium atque corporis culpa repellendus';

console.log(str.slice(66));
// Cutting all

console.log(str.slice(5, 55));
// from to 

console.log(str.slice(-11));
// cutting from the end

//ARRAYS! 

// Create  number array
const number_array = [1, 3, 5, 7, 9, 11, 13];

//Create objects array
const objects_array = [
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
    },
];

// return number
const a=number_array.find(function(e){return e==5});
console.log(a);

//filter meanings 
var b = objects_array.filter(e => e.userId > 4);
console.log(b);

//double all numbers!
const m1 = sweetItem => sweetItem * 2;
const mappp = number_array.map(m1);

console.log(mappp);

//fill one number
number_array.fill(2)
console.log(number_array);

//array length check
console.log(objects_array.length);