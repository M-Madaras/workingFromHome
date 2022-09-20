// add function
// function add (num1 , num2){
//      console.log(num1 + num2)
// }
// add( 17, 30)


// Object test

// let car = {
//     color : "brown",
//     make : "chevy",
//     model : "4doorpick-Up",
//     year : "1996"

// }
// console.log(car)
/******** Black Jack */
// const cards = ["diamond", "spade", "heart", "club"];
// let J = 10
// let Q = 10
// let K = 10
// let A = 11
// const values = [2,3,4,5,6,7,8,9,10,J,Q,K,A]
// let currentCard = "";
// let counter = 0
// let urCrdValues = []
// let urPoints = 0
// function sum(arr, n) {
//   if (n <=0) {
//       return 0;
//   } else {
//       return sum(arr,n-1) + arr[n -1]
//   }
// }

// function symbolRandom(num) {
// while (counter < num) {
//   currentCard = cards[Math.floor(Math.random() * 4)]
//   cardVal = values[Math.floor(Math.random()*13)]
//   counter++
//   urCrdValues.push(cardVal)
//   console.log(`You have the ${cardVal} of ${currentCard}`)
// };
// } //Gives you two cards and tells you as well as placing them into your card values
//  symbolRandom(2)

// if (sum(urCrdValues, 2) < 21) {
//   console.log(`You have a total card value of ${sum(urCrdValues, 2)}`)
//    console.log('Hit or Stay?')
// } else if (sum(urCrdValues, 2) == 21) {
//   console.log('21! You win!')
// } else if (sum(urCrdValues, 2) > 21) {
//   console.log('Over 21! You lose')
// }



// function addingNums(num,num2,num3,num4) {
//     console.log(num + num2 + num3 + num4) 
// }
// addingNums(12,33,22,14)

// sqaured function
// let theExpo = function(num) {
//   console.log(num ** num)
// }
// theExpo(7)




/**** Finding string index in arrray */
// const arr = ['a', 'b', 'c', 'd']
// const string1 = 'a'

// function findStringIndex(array, str) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (str === element) {
//       return i
//     }
//   }
// }

// console.log(findStringIndex(arr, string1))



/*** Type Of */
// function typeOf(arr) {
//   let value = [];
//   for (let i = 0; i < arr.length; i++) {
//     value.push(typeof arr[i]);
//   }
//    return value;
// }
// console.log(typeOf([1,"4",true]))

// // numbers UP
// function numUp(num) {
//     // sum = to input num
//     let sum = num
//     //loop takes all the previous numbers 
//     for (let i = 0; i < num; i++) {
//         // sum is num i is previous += i to get new total
//         sum += i;
//     }
//     // return total
//     return sum;
// }
// console.log(numUp(4))


// function sevenBoom(arr) {
//  // .some checks array for if one method is true
//     if (arr.some(num => `${num}`.includes(7))) {
// // .includes checks to see if certain value included
//         return ("Boom!")
//     }
//     return ("there is no 7 in the array")
// }
// console.log(sevenBoom([2, 6, 4, 9, 3]))

// // int num length of the num
// function countDigit(numb)
// {
//     let count = 0;
//     while (numb != 0)
//     {
//         numb = Math.floor(numb / 10); // this line 
//         ++count;
//     }
//     return count;
// }
//  console.log(countDigit(53344444444))


// Tile Teamwork Tactics
// const possibleBonus = (a,b) => a < b && b - a < 7;
// console.log(possibleBonus(1,8))


// function sumPolygon(n){
//     return (n-2) * 180
// }
// console.log(sumPolygon(5))

// largest Swap
// function largestSwap(num) {
//     return num >= parseInt([...(num + "")].reverse().join(""));
//   }
//   console.log(largestSwap(78))

// index of
// function secondIndexOf(str1,str2) {
//     let firstIndex = str1.indexOf(str2);
// return str1.indexOf(str2, firstIndex + 1);
// }
// console.log(secondIndexOf("the bird is the word","he"))

// number of vowels
// function getNumberOfVowels(str) {
//     let count = 0;
//     const vowels = ['a','e','i','o','u']
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (vowels.includes(char)){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(getNumberOfVowels("the birds and bees"))

// let reverseName = function (name){
//     let newName = name.split("");
//     let newN = newName.reverse();
//     let myName = newN.join("");
//     return console.log(myName)
// }

// reverseName("John")

// let num1 = 349574378956435;
// let array = [1,2,3,4,5,6]
// num1 = num1.toString()
// function digitize(n) {
//     let otherResult = '';
//     for (let i = n.length-1; i >= 0; i--) {
//         otherResult += n[i];
//     }
//     return otherResult;
// }
// console.log(digitize(num1))

// console.log(array.reverse())

// function reversedNum(num) {
//     return (
//       parseFloat(
//         num
//           .toString()
//           .split('')
//           .reverse()
//           .join('')
//       ) * Math.sign(num)
//     )                 
//   }
//   console.log(reversedNum(3031))
//   // several was to reverse numbers in JS
//   let num3 = 349574378956435;
// function digitize(n) {
//   return n.toString().split("").reverse().join('')
// }
// console.log(digitize(num3))

// TWO SUM
// GIVEN AN ARRAY OF INTERGERS (nums) AND AN INTEGER target RETURN indices OF THE two numbers SUCH THAT THEY ADD UP TO target.
// example 1
    // input: nums= [2 , 7, 11, 15 ], target = 9
    // output: [ 0, 1 ]
    // explantation because nums[0] + nums [1] == 9, we return [ 0,1 ]

// first way to solve it // two loops (nested loops )
let nums = [ 2, 7, 11, 15 ]

for ( let i =0; i<arr.length; i ++ ){
    for ( let j= 0; j<arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            return [arr[i], arr[j]]
        }
    }
} // TIME COMPLEXITY : O(N^2) // SPACE COMPLEXITY : O(1) CONSTANT


// second way to solve it // use a map
// create a set
// add every element to the set
// loop through the array to find if  9-a[i] = x is in the set

let arr= [ 1, 2, 6, 4, 7]

const twoSumswSet= (arr, target) => {
    const map = new set()
    for (let i=0; i<arr.length; i ++) {
        set.add(arr[i]) // THIS ACTS LIKE AN OBJECT WHERE THE KEY AND THE VALUE ARE THE SAME THING
    }
    for (let i=0; i < arr.length; i++){
        const num= target- arr[i]
        if (set.has(num)){
            return [arr[i].num]
        }
    }
} // TIME COMPLEXITY : O(N) // SPACE COMPLEXITY: O(N)

// third way of solving it //Sorting the Array 
// sort the array 
// use 2 pointer for algorithm to find target

const twoSumSort= (arr, target) => {
const sort = arr.sort()
let i = 0, j= sort.length-1
while (i<j) {
    const sum = sort[i] + sort[j]
    if (sum > t) {
        j --
    } else if ( sum < t ) {
        i ++ 
    } else {
        return sort[i], sort [j]
    }
} // TIME COMPLEXITY: O(NlogN) // SPACE COMPLEXITY: O(N)
}