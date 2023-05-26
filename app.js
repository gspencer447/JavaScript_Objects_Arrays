// // // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// var sum = 0;
// var arr1 = [2, 22, 12, 17, 18, 39, 129];
// var arr2 = [3, 6, 12, 37, 82, 147]
// function arraySum(arr) {

//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//         //sum += arr[i] does the same thing as above 
//         //first loop does 0 + 2
//         //second loop does 2 + 22
//         //third loop does 24 + 12
//         //fourth loop 36 + 17
//     }
//     console.log(sum);
//     return sum;
// }

// arraySum(arr1)
// arraySum(arr2)

// // // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

// let book = {};
// let obj = {};

// obj.title = "Outliers";
// obj.pages = 300;
// obj.readCount = true;

// book.title = "The Hobbit by J.R.R Tolkien";
// book.pages = 295;
// book.readCount = 3;

// book.info = function(x){
//     return `${x.title}, ${x.pages}, ${x.readCount}`
// }

// obj.info = function(x){
//     return `${x.title}, ${x.pages}, ${x.readCount}`
// }

// console.log(book.info(obj));

// //Exercise 3 Section

// let sentence = "The quick brown fox jumps over the lazy dog";

// function reverseString(str){
    
//     let splitSentence = sentence.split(' ');
//     let answer = [];
    
//     for (let i = 0; i < splitSentence.length; i++) {
//             let reverseWord = splitSentence[i].split('').reverse().join("");
//             answer.push(reverseWord);
//         }
//         let newSentence = answer.join(' ');
//         console.log(newSentence);
//         return newSentence
//     }

// reverseString(sentence)

//Exercise 4 Section
//multiple splits, hold variables for the header, plus name and age
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let rowSplit = csvData.split('\n');
let strHeaders = rowSplit[0].split(',');
let hobbitArray = [];

for (let i = 1; i < rowSplit.length; i++) {
    let objSplit = rowSplit[i].split(',');
    let obj = {}
    obj[strHeaders[0]] = objSplit[0];
    obj[strHeaders[1]] = objSplit[1];
    hobbitArray.push(obj);
}

console.log(hobbitArray);
