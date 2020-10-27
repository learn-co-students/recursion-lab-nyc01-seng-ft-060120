
function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

printString("alexandra")

function reverseString(myString) {
    if (myString.length < 2) {
      return myString;
    } else {
      return reverseString(myString.substring(1)) + myString[0];
    }
  }

//   function isPalindrome(string){
//     if (string.length > 1){
//         if (string[0] === string[string.length -1]){
//             isPalindrome(string.substring(1, string.length -1))
//         } else {
//             return false
//         }
//     } else {
//         return true
//     }
//   }

  function isPalindrome(myString) {
    let l = myString.length;
  
    if (l < 2) {
      return true;
    } else if (myString[l - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, l - 1));
    } else {
      return false;
    }
  }

  function addUpTo(ary, index){
      return index ? ary[index] + addUpTo(ary, --index) : ary[0]
  }

  function sumOfArray(array){
      let sum = 0
      for (i=0; i < array.length; i++){
          sum += array[i]
      }
      return sum
  }

  function sumUsingPT(array){
      return array.reduce((total, n)=> total + n)
  }

  function sumWithRec(array){
      if (array.length > 1){
      return array[0] + sumWithRec(array.slice(1,array.length))
      } else {
          return array[0]
      }
  }

  function maxOf(array){
      if (array.length > 1){
          return array[0] > array[array.length -1] ? maxOf(array.slice(0, array.length -1)) : maxOf(array.slice(1, array.length))
      } else {
          return array[0]
      }
  }