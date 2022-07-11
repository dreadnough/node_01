// Object with numbers
const numbersObj = {
	a: 5,
	b: 10
};

// Object destructuring
const {a, b} = numbersObj;


// Functions with mathematical operations
const add = () => {
	return a + b;
};

const sub = () => {
	return b - a;
};

const mul = () => {
	return a * b;
};

const div = () => {
	return a / b;
};

// The string to be cut
const str = 'Інфляція в Україні у червні прискорилася до 21,5% у річному вимірі порівняно з 18% місяцем раніше. ';

// Cuts the string
const cutStr = (startCut, endCut) => {
	return str.slice(startCut, endCut);
};

// Makes one string out of several and also added a regular expression that removes extra spaces
const addStr = (resFunc) => {
	return `${resFunc(0,10)} ${resFunc(11, 21)} ${resFunc(22, 32)}`.replace(/^ +| +$|( ) +/g,"$1");
};

console.log(add());
console.log(sub());
console.log(mul());
console.log(div());
console.log(addStr(cutStr));