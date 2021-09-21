function isPalindrome(word) {
  // Write your algorithm here
  return word[0] !== word[word.length - 1] ? false : true;
}

/* 
  Add your pseudocode here
  If first letter and last letter are different, return false.
*/

/*
  Add written explanation of your solution here
  compare first and last letters.
  return false if these are different.
  return true if they are the same.
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
