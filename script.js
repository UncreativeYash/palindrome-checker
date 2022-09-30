let textInput = document.querySelector(".textInput");
let btn = document.querySelector(".btn");
let textResult = document.querySelector(".textResult");

function check() {
  let removeChar = textInput.value.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  let checkPalindrome = removeChar.split("").reverse().join("");

  /* Check to see if str is a Palindrome*/
  if (removeChar === checkPalindrome) {
    textResult.innerHTML = textInput.value + " is a Palindrome";
  } else {
    textResult.innerHTML = textInput.value + " is not a Palindrome";
  }
}
