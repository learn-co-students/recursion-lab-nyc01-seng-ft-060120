// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

function reverseString(str){
    if(str.length === 0) return str 
    return reverseString(str.slice(1)) + str[0]
}

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

// my solution  

/*
function addUpTo(arr, index){
    let sum = arr[index] + arr[0]
    arr[0] = sum 
    index-- 
    if(index > 0) return(addUpTo(arr, index))
    else return sum 
  }
*/ 

function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

// my solution 

/*

function maxOf(arr){
  if(arr.length === 1) return arr[0]
  if(arr.length === 2) return Math.max(arr[0], arr[1])
  let currentMax = Math.max(arr[0], arr[1])
  if(arr.indexOf(currentMax) === 0){
    arr.push(currentMax)
    return maxOf(arr.splice(2, arr.length))
  } 
  if (arr.indexOf(currentMax) === 1){
    arr.push(currentMax)
    return maxOf(arr.splice(2, arr.length))
  }
}

*/ 

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(arr, num){
  if(arr.length === 0) return false 
  else{
    if(arr[0] === num) return true
    return includesNumber(arr.slice(1), num)
  }
 }
