function isPalindrome(word) {
  // Write your algorithm here

  let wordLength = word.length - 1; 
   
  for(let i = 0; i <  word.length; i++ ){
    if(word.charAt(i)  === word.charAt(wordLength)){
      wordLength - 1;
    }else{
      return false;
    }

    return true;
  }

}

/* 
  Add your pseudocode here

  1. Iterate through string "word"
  2. if the first character of "word is equal to the last one",  return true and check the following char
  3. Repeat this process until condition is false
*/



/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting true");
  console.log("=>", isPalindrome("madam"))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Lopez"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
