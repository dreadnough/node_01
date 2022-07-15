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
  
  /* cuts string in predetermined places, returns cut string
   cutStrStart, cutStrEnd determine where the string should be cut*/
  const cutStr = ({str,cutStrStart, cutStrEnd}) =>
  {
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

      const arrWNumbers = [56, 345, 23, 87, 2, 28, 6];

      const arrWObjects = [
    {
    product_id: 1,
	product_name: 'Ford Fiesta',
	product_price: 7000,
	goods_id: 1,
	user_id: 1,
	product_location: 'Lviv',
}, 
{
	product_id: 2,
	product_name: 'Toyota Camry',
	product_price: 15000,
	goods_id: 1,
	user_id: 2,
	product_location: 'Kyiv',
},
{
	product_id: 3,
	product_name: 'Pandora Diamond Ring',
	product_price: 5000,
	goods_id: 2,
	user_id: 3,
	product_location: 'Horodenka',
},
{
	product_id: 4,
	product_name: 'Minimal silver earrings',
	product_price: 754,
	goods_id: 3,
	user_id: 4,
	product_location: 'Lviv',
},
{
	product_id: 5,
	product_name: 'The HARDKISS',
	product_price: 2580,
	goods_id: 2,
	user_id: 5,
	product_location: 'Peremogy sq.3',
},
{
	product_id: 6,
	product_name: 'Mercedec 508D',
	product_price: 71332000,
	goods_id: 1,
	user_id: 6,
	product_location: 'Lviv',
},
{
	product_id: 7,
	product_name: 'Gas block',
	product_price: 3000,
	goods_id: 3,
	user_id: 7,
	product_location: 'Ternopil',
}]

console.log(arrWNumbers.filter(item => item > 28))
const prodLoc = arrWObjects.filter(({product_location}) => product_location === "Lviv");
console.log(prodLoc);
console.log(arrWNumbers.find(item => item === 28))
const prodPrice = arrWObjects.find(({product_price}) => product_price === 3000);
console.log(prodPrice);
console.log(arrWNumbers.map(item => item < 28));
console.log(arrWObjects.map(item => item.product_name))
console.log(arrWNumbers.findIndex(item => item === 87))
console.log(arrWObjects.reverse())