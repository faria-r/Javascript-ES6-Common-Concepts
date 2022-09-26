const numbers = [12,34,54,23,232,36];
const output = numbers.map(x => x/2);
// console.log(output);
const friends = ['tom brady','tom cruise','tom solution'];
const firstLetters = friends.map(friend => friend[0]);
const  nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);
// console.log(firstLetters);

const products = [
    {id:1,name:'laptop',price: 45000},
    {id:1,name:'mobile',price: 15000},
    {id:1,name:'tablet',price: 35000},
    {id:1,name:'Macbook',price: 25000}
];
const items = products.map(product => product.name);
console.log(items);