const numbers = [2,34,5,3,43,2,324,45];
// const output = [];
// for (const number of numbers){
//     const doubled = number*2;
//     output.push(doubled);
// }
// console.log(output);


// declare a arrow function for make a double of a number 
const doubleIt = num => num * 2;
function getDoubles(numbers){
    const output = [];
for (const number of numbers){
    // const doubled = number*2;
    const doubled = doubleIt(number);
    output.push(doubled);
}
return output;
}
const result = getDoubles(numbers);
console.log(result);

// purpose 
/* 
1.get an array 
2.for every elements do something
3.store the result in a array
4. return the result array.
*/

const makeDoubled = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(x => x *2 )
const fiveTimes = [3,45,32,2].map(x => x*5);
console.log(makeDoubled);
console.log(fiveTimes);

