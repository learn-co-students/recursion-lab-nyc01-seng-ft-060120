
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
      return index ? ary[index] + addUpTo(ary, --index) : ary[index]
  }