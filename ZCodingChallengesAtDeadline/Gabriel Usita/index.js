console.log("Activity 1");
//Activity 1
//Create a for loop to display numbers from 0 to 50
for (var i = 0; i <= 50; i++) {
    console.log(i);
}


//Display only even numbers from 0 to 50 
for (var i = 0; i <= 50; i += 2) { //from 0 increment 2 in order to display even numbers
    console.log(i);
}

//Get the sum of all even numbers from 0 to 50 //650
var sum = 0;
for (var i = 0; i <= 50; i += 2) {
    sum += i;
    console.log(sum);
}

//Get ALSO the sum of all odd numbers from 0 to 50 //625
var sum = 0;
for (var i = 1; i <= 50; i += 2) { //from 1 increment 2 in order to display odd numbers
    sum += i;
    console.log(sum);
}

//BONUS: List prime numbers from 0 to 50 and sum

for (let i = 1; i <= 50; i++){
     let prime = 0;
     
    for (let a = i; a >= 1; a--){
        if(i % a == 0){
            prime = prime + 1;
        }
    }
    if (prime == 2){
        console.log(i);
    }
}


console.log("Activity 2");
//Activity 2
// Create four variables and assign them different values.

let first = 85;
let second = 89;
let third = 90;
let fourth = 94;

console.log("the student's first qtr grade is " + first);
console.log("the student's second qtr grade is " + second);
console.log("the student's third qtr grade is " + third);
console.log("the student's fourth qtr grade is " + fourth);

var average =  (first + second + third + fourth) / 4;

console.log("the average score is " + average);

let transmuted = 0;
let remarks = 'passed';

//To check average 
if (average >= 93 && average <= 100){
    transmuted = 1.00;    
} 
else if (average >= 90 && average <= 93) {
    transmuted = 1.25;
} 
else if (average >= 87 && average <= 90) {
    transmuted = 1.5;
} 
else if (average >= 84 && average <= 87) {
    transmuted = 1.75;
} 
else if (average >= 80 && average <= 84) {
    transmuted = 2.00;
} 
else if (average >= 75 && average <= 80) {
    transmuted = 2.25;
} 
else if (average >= 70 && average <= 75) {
    transmuted = 2.50;
} 
else if (average >= 65 && average <= 70) {
    transmuted = 2.75;
} 
else if (average >= 60 && average <= 65) {
    transmuted = 3.00;
} 
else if (average >= 55 && average <= 60) {
    transmuted = 4.00;
    remarks = 'failed';
} 
else if (average >= 0 && average <= 55) {
    transmuted = 5.00;
    remarks = 'failed';
} 

console.log("The transmuted grade is: " + transmuted + " and the student's status is " + remarks);

console.log("Activity 3");
//Activity 3
//Find the longest word in a string 
//findLongestWordLength

function findLongestWordLength(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

  console.log("Activity 4");

//Activity 4
//Palindrome Check

function PalindromeCheck(str)
  {
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;
      let y = str[j-i];
      if( x != y)
      {
        return false;
      }
    }
    return true;
     
  }

  function palindrome(str)
  {
    let ans = PalindromeCheck(str);
    if(ans == true)
    {
      console.log("true")
      console.log(test + ", is a palindrome");
    }
    else
    {
      console.log("false")
      console.log(test + ", not a palindrome");
    }
  }
  let test = "able was i ere i saw elba";
  palindrome(test);

console.log("Activity 5");
//Activity 5
//number to word
