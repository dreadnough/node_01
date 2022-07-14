//functions

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} this is the result of sum of the numbers
 */
const sum = ({ a, b })=> {
  return  a + b;
};

/**
 * 
 * @param {number} c 
 * @param {number} d 
 * @returns {number} this is  the result of subtracting numbers
 */
const sub = ({c,d}) => {
    return c - d;
}
/**
 * 
 * @param {number} c 
 * @param {number} d 
 * @returns {number} this is the result of multiplying numbers
 */
const mult = ({a,b}) => {
    return a * b;
}

/**
 * 
 * @param {number} c 
 * @param {number} d 
 * @returns {number} this is the result of dividing numbers
 */
const div = ({c,d}) => {
    return c / d;
}

/**
 * This function extracts a section of a string
 * @param {string} Original string
 * @param {index} The index of the first character to include in the returned substring.
 * @param {index} The index of the first character to exclude from the returned substring.
 * @returns returns  a new string, without modifying the original string
 */
const extractingSection = ({str, indexStart, indexEnd}) => {
    return str.slice(indexStart, indexEnd)
}

/**
 * This function combines the elements of an array
 * @param {string} str1 
 * @param {string} str2 
 * @param {string} str3 
 * @returns a new string
 */
const joining = ({str1, str2, str3}) => {
   const arr = [str1, str2, str3].join(',');
   return arr;
}

console.log(sum({a: 2, b: 3}))
console.log(sub({c: 6, d: 2}))
console.log(mult({a: 4, b: 5}))
console.log(div({c: 9, d: 3}))
console.log(extractingSection({str: "The morning is upon us.", indexStart: 4, indexEnd: 11}))
console.log(joining({str1: "skype",str2: "telegram", str3: "viber"}));


// create  numbers array
const numberArr = [2,3,15,7,9,13,1];

//create object array
const objectArr = [
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
]


//The find() method returns the value of the first element that passes a test
const foundNumber = numberArr.find((num)=> num > 10);
console.log(foundNumber);

const foundItem = objectArr.find((i) => i.userId == 3);
console.log(foundItem);

/* The filter() method creates a new array filled with elements
that pass a test provided by a function.
*/
const filterNumbers = numberArr.filter((num) => num > 6);
console.log(filterNumbers); 

const filterItems = objectArr.filter((i) => i.userCity == "Lviv")
console.log(filterItems);

// The map() method creates a new array from calling a function for every array element.
const resultOfNumbers = numberArr.map((num) => num * 2);
console.log(resultOfNumbers);

const userFullnames = objectArr.map(function(el){
    return `${el.firstName} ${el.lastName}`;
})
console.log(userFullnames);


/* The sort() method sorts the elements of an array.
This method overwrites the original array.
*/
const sortingNumbers = numberArr.sort((a, b) => a - b);
console.log(sortingNumbers);

const sortingItems = objectArr.sort(function(a, b){
    if(a.firstName < b.firstName) { return -1; }
    if(a.firstName > b.firstName) { return 1; }
    return 0;
});
console.log(sortingItems);

/*The reverse() method reverses the order of the elements in an array.
This method overwrites the original array.
*/
const reverseNumbers = numberArr.reverse()
console.log(reverseNumbers);

const reverseItems = objectArr.reverse()
console.log(reverseItems);





