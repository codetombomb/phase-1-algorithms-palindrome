function isPalindrome(word) {
  // Write your algorithm here
  return word.split('').reverse().join('') === word;
}

/* 
  Add your pseudocode here
  if the reversed version of word is that same as word, then return true else return false
*/

/*
  Add written explanation of your solution here
  reverse string
  compare to original word
  return true if they are the same
  return false if they are different
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
