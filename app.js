console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

var sum = 0;
var arr1 = [2, 22, 12, 17, 18, 39, 129];
var arr2 = [3, 6, 12, 37, 82, 147]
function arraySum(arr) {

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        //sum += arr[i] does the same thing as above 
        //first loop does 0 + 2
        //second loop does 2 + 22
        //third loop does 24 + 12
        //fourth loop 36 + 17
    }
    console.log(sum);
    return sum;
}

arraySum(arr1)
arraySum(arr2)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};
let obj = {};

obj.title = "Outliers";
obj.pages = 300;
obj.readCount = true;

book.title = "The Hobbit by J.R.R Tolkien";
book.pages = 295;
book.readCount = 3;

book.info = function(x){
    return `${x.title}, ${x.pages}, ${x.readCount}`
}

obj.info = function(x){
    return `${x.title}, ${x.pages}, ${x.readCount}`
}

console.log(book.info(obj));


