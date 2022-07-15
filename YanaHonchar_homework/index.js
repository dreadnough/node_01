//@param {number} y, z
//returns sum of numbers y and z 
const plus = ({ y, z }) => {
    return y + z;
};
//@param {number} y, z
//returns minus of numbers y and z 
const minus = ({y, z}) => {
return y - z;
};
//@param {number} y, z
//returns multiply of numbers y and z
const multiply = ({y, z}) => {
return y * z;
};
//@param {number} y, z
//returns divide of numbers y and z 
const divide = ({y, z}) => {
return y / z;
};

//Cuts a piece of separately specified parameters from the specified string
// @param (str) text
const str = "The Main offers relaxed, informal dining with an extensive international menu, catering for all tastes";
const sliceText = (str) => {
  console.log(str.slice (4, 25));
};

// Initiate strings for function addText
const mail1 = "Your dog at our home";
const mail2 = "You are not home";
const mail3 = "Send me money";

//Collects from specified 3 strings 1 string
// @param (string1, string2, string3) some 3 strings
const addText = (sring1, string2, string3) => {
const add = [sring1, string2, string3].join(",");    
console.log(add);
}

//shows results 
sliceText(str);
addText(mail1, mail2, mail3);
console.log(plus({y: 1, z: 5}));
console.log(minus({y: 9, z: 4}));
console.log(multiply({y: 5, z: 5}));
console.log(divide({y: 10, z: 5})); 
