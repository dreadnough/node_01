// Function

// @param {number} num1, num2
// returns sum of numbers num1 and num2.
const add = ({ num1, num2 }) => {
    return num1 + num2;
};

// @param {number} num1, num2
// returns the result of the subtraction the num1 from the num2
const sub = ({ num1, num2 }) => {
    return num1 - num2;
};

// @param {number} num1, num2
// returns the result multiplication num1 by num2
const mul = ({ num1, num2 }) => {
    return num1 * num2;
};

// @param {number} num1, num2
// returns the result division num1 by num2
const div = ({ num1, num2 }) => {
    return num1 / num2;
};

// @param {string} string1, string2, string3 
// returns one string (combines three string into one)
const mergingIntoOneString = ({ string1, string2, string3 }) => {
    return `${string1} ${string2} ${string3}`;
};

// @param {string} - string for cutting
// @param {index} - the index that indicates the start of the cutout
// @param {index} - the index that indicates the finish of the cutout
// returns cutting string
const cuttingWithString = ({ string, startCut, finishCut }) => {
    return string.slice(startCut, finishCut);
};

// Check function
console.log(add({ num1: 10, num2: 90 }));
console.log(sub({ num1: 100, num2: 90 }));
console.log(mul({ num1: 10, num2: 10 }));
console.log(div({ num1: 20, num2: 4 }));
console.log(
    mergingIntoOneString({
        string1: "String 1",
        string2: "string 2",
        string3: "string 3",
    })
);
console.log(
    cuttingWithString({
        string: "I live in Ukraine",
        startCut: 0,
        finishCut: 9,
    })
);

// Homework array 

// Create array, numbers
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];

//Create array, objects
const arrayObjects = [
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

// Method find
console.log(arrayNumbers.find((item) => item == 3));
console.log(arrayObjects.find((item) => item.firstName == "Alex"));

// Method filter
console.log(arrayNumbers.filter((item) => item > 2 && item < 6));
console.log(arrayObjects.filter((item) => item.userId == 3));

// Method map
console.log(arrayNumbers.map((item) => item * 2));
console.log(arrayObjects.map((item) => item.userCity));

// Method includes
console.log(arrayNumbers.includes(2));

// Method reduce
console.log(arrayNumbers.reduce((sum, item) => sum + item, 0));
console.log(
    arrayObjects.reduce((names, item) => names + item.userPhone + "; ", "")
);
