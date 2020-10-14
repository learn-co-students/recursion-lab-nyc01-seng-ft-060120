// Code your solution here!
function printString(myString){
    console.log(myString[0])
    if (myString.length > 1){
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true
    }
}

function reverseString(myString){
    if (myString === ""){
        return ""
    } else {
        return reverseString(myString.substr(1)) + myString.charAt(0)
    }
}

function isPalindrome(myString){
    myString.replace(/[^a-z0-9]/i, '').toLowerCase()
    if (myString.length <= 1){
        return true 
    } else if (myString[0] !== myString[myString.length - 1]){
        return false 
    } else {
        return isPalindrome(myString.slice(1, -1))
    }
}

function addUpTo(arr, i){
    if (i){
        return arr[i] + addUpTo(arr, i - 1)
    } else {
        return arr[i]
    }
}

function maxOf(arr){
    if (arr.length === 1){
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}

function includesNumber(arr, num){
    if (arr.length === 0) {
        return false
    } else if (arr[0] === num){
        return true 
    } else {
        return includesNumber(arr.slice(1), num)
    }
}