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

const arrWithNumbers = [22, 16, 90, 4, 16, 94, 256];

const arrWithObj = [{
	product_id: 1,
	product_name: 'Ford Fiesta',
	product_price: 7000,
	goods_id: 1,
	user_id: 1,
	product_location: 'Lviv',
	product_quantity: 2,
	product_description: 'New car'
}, {
	product_id: 2,
	product_name: 'Toyota Camry',
	product_price: 15000,
	goods_id: 1,
	user_id: 2,
	product_location: 'Kyiv',
	product_quantity: 1,
	product_description: 'New car Toyota Camry'
},{
	product_id: 3,
	product_name: 'Pandora Diamond Ring',
	product_price: 5000,
	goods_id: 2,
	user_id: 3,
	product_location: 'Horodenka',
	product_quantity: 3,
	product_description: 'A solid 14k white gold ring hand set with a 0.50 carat lab-created diamond.'
},{
	product_id: 4,
	product_name: 'Minimal silver earrings',
	product_price: 754,
	goods_id: 3,
	user_id: 4,
	product_location: 'Lviv',
	product_quantity: 2,
	product_description: 'Regular silver earrings with birds and leaf! '
},{
	product_id: 5,
	product_name: 'The HARDKISS',
	product_price: 2580,
	goods_id: 2,
	user_id: 5,
	product_location: 'Peremogy sq.3',
	product_quantity: 1,
	product_description: 'Jewelry house SOVA presented a collection designed in collaboration with the Ukrainian group The Hardkiss.Golden lightnings, stars, spikes and other fatal elements are first seen in the jewelry collections of the Ukrainian brand SOVA thanks to a collaboration with the rock band The Hardkiss.'
},{
	product_id: 6,
	product_name: 'Mercedec 508D',
	product_price: 71332000,
	goods_id: 1,
	user_id: 6,
	product_location: 'Lviv',
	product_quantity: 3,
	product_description: 'old but gold'
},{
	product_id: 7,
	product_name: 'Gas block',
	product_price: 3000,
	goods_id: 3,
	user_id: 7,
	product_location: 'Ternopil',
	product_quantity: 600,
	product_description: 'The quantity is indicated in pallets, one pallet contains 30 pieces, the price is indicated for 1 pallet'
}];



console.log(add());
console.log(sub());
console.log(mul());
console.log(div());
console.log(addStr(cutStr));
console.log(arrWithNumbers.find(item => item === 14));
console.log(arrWithNumbers.filter(item => item > 22));
console.log(arrWithObj.map(item => item.product_description.length));
console.log(arrWithNumbers.findIndex(item => item === 4));
console.log(arrWithNumbers.findIndex(item => item === 4));
console.log(arrWithObj.reverse());


