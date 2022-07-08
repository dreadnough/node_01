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