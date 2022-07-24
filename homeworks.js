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
//     console.log(num+num2 + num3 + num4) 
// }
// addingNums(12,33,22,14)

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


