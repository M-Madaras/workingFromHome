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