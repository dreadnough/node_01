//returns sum of numbers a and b
const sum = ( a, b ) =>
{
    return a + b;
};

//returns the result of sub c from d
const sub = ( c, d ) =>
{
    return c - d;
};

//returns the result of mul aa by b
const mul = ( a, b ) =>
{
    return a * b;
};

//returns the result div c by d
const div = ( c, d ) =>
{
    return c / d;
};

//combines 3 strings into one and returns it
const mergeStr = ({str1, str2, str3}) =>
{
    return `${str1} ${str2} ${str3}`;
};

//determined string for cuts
//str = "We had two bags of grass and seventy five pellets of mescaline";

/* cuts string in predetermined places, returns cut string
 cutStrStart, cutStrEnd determine where the string should be cut*/
const cutStr = ({str,cutStrStart, cutStrEnd}) =>
{
    //str: "We had two bags of grass and seventy five pellets of mescaline";
    return str.slice(cutStrStart, cutStrEnd);
};

console.log(sum(6, 9))
console.log(sub(8, 3))
console.log(mul(4, 7))
console.log(div(18, 3)) 

console.log(mergeStr(
    {
        str1: "1st string",
        str2: "2nd string",
        str3: "3rd string",
    })
);

console.log(cutStr(
    {
        str: "We had two bags of grass and seventy five pellets of mescaline",
        cutStrStart: 6,
    cutStrEnd: 25,
    })
    );