// Code your solution here!

function printString(str) {
    console.log(str[0])
    if (str.length>1) {
        printString(str.slice(1,str.length))
    }
    else {
        return true
    }
} 

function reverseString(str) {
    if (str.length>1) {
        return str[str.length-1]+reverseString(str.slice(0,str.length-1))
    }
    else {
        return str
    }
}

function isPalindrome(str) {
    if (str.length>2) {
        return (str[0]===str[str.length-1]) && isPalindrome(str.slice(1,str.length-1))
    }
    else {
        return (str[0]===str[str.length-1])
    }
}