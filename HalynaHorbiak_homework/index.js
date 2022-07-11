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


