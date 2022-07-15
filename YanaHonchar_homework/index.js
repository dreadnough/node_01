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

//create array
const days = [1, 2, 3, 4, 5, 6, 7];


//create users array
const tableInfo = [
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
//using find metod
const findCity = tableInfo.find(({userCity})=> userCity === "Kyiv");
console.log(findCity);
//using filter metod
const userId = tableInfo.filter(({userId})=> userId === 4);
console.log(userId);
//using map metod
 const squaresDays = days.map(x => x * x);
console.log(squaresDays)
//using push metod
days.push(8);
console.log(days);
//using reverse metod
days.reverse();
console.log( days ); // 8,7,6,5,4,3,2,1