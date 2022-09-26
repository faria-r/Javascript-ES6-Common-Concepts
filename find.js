const products = [
    {id:1,name:'laptop',price: 45000},
    {id:1,name:'mobile',price: 15000},
    {id:1,name:'tablet',price: 35000},
    {id:1,name:'Macbook',price: 25000}
];

const numbers = [30,4,23,4,32,5,25,223];
const fives = numbers.find( num => num % 5 === 0);
console.log(fives);