// Code your solution here!

printString = (str) => {
    console.log(str[0])
    if (str.length>1) {
        printString(str.slice(1,str.length))
    }
    else {
        return true
    }
} 