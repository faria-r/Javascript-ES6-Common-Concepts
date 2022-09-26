// const numbers = [22,4,23,4,32,5,23,223];
// const bignums = numbers.filter(number => number > 20);
// console.log(bignums);
// const tiny = numbers.filter(num => num<23);
// console.log(tiny);
// const even = numbers.filter(n => n%2 == 0);
// console.log(even);

const products = [
    {id:1,name:'laptop',price: 45000},
    {id:1,name:'mobile',price: 15000},
    {id:1,name:'tablet',price: 35000},
    {id:1,name:'Macbook',price: 25000}
];
// const expensive = products.filter(p => p.price > 25000);
const expensive = products.filter(p => p.price > 25000);
console.log(expensive);