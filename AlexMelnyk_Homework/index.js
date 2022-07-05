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
