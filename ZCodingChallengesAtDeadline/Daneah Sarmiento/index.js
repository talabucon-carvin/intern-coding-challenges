//Activity 1
console.log("++++++++ Activity 1 +++++++++");

let sumEven = 0;
let sumOdd = 0;

console.log("Even numbers from 0 to 50: "); 
for (var x = 0; x <= 50; x++) {
    //display only even numbers from 0 to 50
    if (x % 2 === 0) {
        console.log(x);    
        sumEven += x; //sum of even numbers
    } 
    else {
        sumOdd += x; //sum of odd numbers
    }
}

//sum of even/odd numbers
console.log("The sum of all even numbers from 0 to 50: " + sumEven);
console.log("The sum of all odd numbers from 0 to 50: " + sumOdd);

//prime number - only divisible by itself and 1
console.log("++++++++ Bonus ++++++++");
function isPrime(num)
{
    if(num == 1 || num == 0){ // 0 and 1 is not a prime number - return false
        return false;
    }
    for(var i = 2; i < num; i++) { //loop from 2 to num-1 // 2 < 2 - false -> prime
        if(num % i == 0){ // if the number is divisible by i, then n is not a prime number
            return false;   
        }
    }
    return true; // else true - num is a prime number
}

let sumPrime = 0;
for(var i = 0; i <= 50; i++) //check every number from 0 to 50
{
    //check if current number is a prime number - calls isPrime
    if(isPrime(i)) {
        console.log(i); //print number if prime
        sumPrime += i; //sum of prime numbers 
    }
}
 
console.log("The sume of all prime numbers from 0 to 50: " + sumPrime)

//Activity 2
console.log("++++++++ Activity 2 ++++++++");

let first = 85;
let second = 89;
let third = 90;
let fourth = 94;

console.log("The student's first qtr grade is " + first);
console.log("The student's second qtr grade is " + second);
console.log("The student's third qtr grade is " + third);
console.log("The student's fourth qtr grade is " + fourth);

//Compute for the average
let average = (first+second+third+fourth) / 4;
console.log("The average score is " + average)

//Transmutation
let transmu = 0;
let gradeStat = 'passed';

if (average >= 93 && average <= 100){
    transmu = 1.00;    
} 
else if (average >= 90 && average <= 93) {
    transmu = 1.25;
} 
else if (average >= 87 && average <= 90) {
    transmu = 1.5;
} 
else if (average >= 84 && average <= 87) {
    transmu = 1.75;
} 
else if (average >= 80 && average <= 84) {
    transmu = 2.00;
} 
else if (average >= 75 && average <= 80) {
    transmu = 2.25;
} 
else if (average >= 70 && average <= 75) {
    transmu = 2.50;
} 
else if (average >= 65 && average <= 70) {
    transmu = 2.75;
} 
else if (average >= 60 && average <= 65) {
    transmu = 3.00;
} 
else if (average >= 55 && average <= 60) {
    transmu = 4.00;
    gradeStat = 'failed';
} 
else if (average >= 0 && average <= 55) {
    transmu = 5.00;
    gradeStat = 'failed';
} 

console.log("++++++++ Bonus ++++++++");
console.log("The transmuted grade is: " + transmu + " and the student's status is " + gradeStat);

//Activity 3
console.log("++++++++ Activity 3 ++++++++");

function findLongestWordLength(str){
    var splitStr = str.split(' '); //split words with space
    var longestCount = 0;
    for(var i = 0; i < splitStr.length; i++){ //loop through all words
      if(splitStr[i].length > longestCount){ //if length of the word > value of longestCount
        longestCount = splitStr[i].length; //assign length of the word to longestCount
       }
    }
    console.log(longestCount); //output
    console.log("++++++++ Bonus ++++++++");
    console.log("Output: Longest word is with " + longestCount + " characters") //output - bonus
    return longestCount; //return value to caller
}

findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

//Activity 4
console.log("++++++++ Activity 4 ++++++++");

function palindromeCheck(str) {
    var lowerStr = str.toLowerCase(); //converts to lower case
    var reverseStr = lowerStr.split('').reverse().join(''); //splits the word ' ', reverse, then join ' '
    return reverseStr === lowerStr; 
}

const palStr = "Able was I ere I saw Elba"
const palResult =  palindromeCheck(palStr);
console.log(palResult);

console.log("++++++++ Bonus ++++++++");
//check if true or false
if(palResult === true){
    console.log("'" + palStr + "' is a palindrome");
} else {
    console.log("'" + palStr + "' is not a palindrome");
}

//Activity 5
console.log("++++++++ Activity 5 ++++++++");

function numToWord(num){
    var numStr = num.toString(); 
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];

    //negative number
    if(num < 0){
        return 'Negative numbers are not checked.';
    }
    //zero
    if(num === 0){
        return 'zero';
    }
    //2 Digits - 1-19
    if(num < 20){
        return ones[num];
    }
    //2 Digits - 20-99
    if (numStr.length === 2) {
        return tens[numStr[0]] + ' ' + ones[numStr[1]];
    }
    //3 Digits
    if (numStr.length == 3) {
        if (numStr[1] === '0' && numStr[2] === '0'){
            return ones[numStr[0]] + ' hundred';
        }
        else{
            return ones[numStr[0]] + ' hundred ' + numToWord(+(numStr[1] + numStr[2])); // unary + - converts it into a number, calls numToWord to evaluate 
        } 
    }   
    //4 Digits
    if (numStr.length === 4) {
        var end = +(numStr[1] + numStr[2] + numStr[3]); 
        if (end === 0){
            return ones[numStr[0]] + ' thousand';
        }
        if (end < 100) {
            return ones[numStr[0]] + ' thousand ' + numToWord(end);
        }
        return ones[numStr[0]] + ' thousand ' + numToWord(end);
    } 
    //5 Digits
    if (numStr.length === 5) {
        var end = +(numStr[2] + numStr[3] + numStr[4]); 
        if (end === 0){
            return numToWord(+(numStr[0] + numStr[1])) + ' thousand';
        }
        if (end < 100) {
            return numToWord(+(numStr[0] + numStr[1])) + ' thousand ' + numToWord(end);
        }
        return numToWord(+(numStr[0] + numStr[1])) + ' thousand ' + numToWord(end);
    }  
     //6 Digits
     if (numStr.length === 6 ) {
        var end = +(numStr[3] + numStr[4] + numStr[5]); 
        if (end === 0){
            return ones[numStr[0]] + ' hundred ' + tens[numStr[1]] + ' ' + ones[numStr[2]] + ' thousand';
        }
        if (end < 100) {
            return ones[numStr[0]] + ' hundred ' + tens[numStr[1]] + ' ' +  ones[numStr[2]] + ' thousand ' + numToWord(end);
        }
        return ones[numStr[0]] + ' hundred ' + tens[numStr[1]] + ' ' + ones[numStr[2]] + ' thousand ' + numToWord(end);
    }  
}

const val =  numToWord(1012);
console.log("Output: " + val);

console.log("Test: " );
console.log(numToWord(-99));
console.log(numToWord(0));
console.log(numToWord(10));
console.log(numToWord(21));
console.log(numToWord(99));
console.log(numToWord(101));
console.log(numToWord(500));
console.log(numToWord(623));
console.log(numToWord(999));
console.log(numToWord(12090));
console.log(numToWord(12350));
console.log(numToWord(123456));
console.log(numToWord(123000));
console.log(numToWord(123400));
console.log(numToWord(123450));
console.log(numToWord(999999));