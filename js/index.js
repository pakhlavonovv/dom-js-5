// Task 96

// function firstUnique(arr) {
//     return arr.filter((element, index) => arr.indexOf(element) === index && arr.lastIndexOf(element) === index)[0];
// }
// // Test case
// console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5])); 

// Task 103

// function findDuplicates(arr) {
//     let unique = arr.filter((item, i, ar) => ar.indexOf(item) !== i);
// console.log(unique);
//  }
 
//  // Test case
//  console.log(findDuplicates([1, 2, 3, 1, 2, 4])); 
//  // Output: [1, 2]

//  102

// function uniqueConcat(arr) {
// let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique.join(''));
// }

// // Test case
// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd'])); 
// // Output: "abcd"

// Task 97

// function extractAndSortNumbers(str) {
//     let numbers = [];
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (!isNaN(char) && char !== ' ') {
//             numbers.push(parseInt(char, 10));
//         }
//     }
//     numbers.sort((a, b) => a - b);
//     return numbers;
// }
// // Test case
// console.log(extractAndSortNumbers("a3c2d4b1")); 

// Task 101

// function sortKeys(obj) {
//     let sortedKeys = Object.keys(obj).sort();

//     let sortedObj = {};
//     for (let key of sortedKeys) {
//         sortedObj[key] = obj[key];
//     }
//     return sortedObj;
// }

// // Test case
// const obj = {
//     b: 2,
//     a: 1,
//     c: 3
// };
// console.log(sortKeys(obj)); 
// // Output: { a: 1, b: 2, c: 3 }
