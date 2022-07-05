// Function
const add = ({ num1, num2 }) => {
    return num1 + num2;
};
//function accepts an object with two numbers,
//addition, returns result

const sub = ({ num1, num2 }) => {
    return num1 - num2;
};
//function accepts an object with two numbers,
//subtracts, returns result

const mul = ({ num1, num2 }) => {
    return num1 * num2;
};
//function accepts an object with two numbers,
//multiplies, returns result

const div = ({ num1, num2 }) => {
    return num1 / num2;
};
//function accepts an object with two numbers,
//divides, returns result

const mergingIntoOneString = ({ string1, string2, string3 }) => {
    return `${string1} ${string2} ${string3}`;
};
//function accepts an object with three string,
//combines three strings into one and returns the result

const cuttingWithString = ({ string, startCut, finishCut }) => {
    return string.slice(startCut, finishCut);
};
//function accepts an object with string, the beginning and end of the cutout
//makes a cut from the String according to the specified parameters and returns the result

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
