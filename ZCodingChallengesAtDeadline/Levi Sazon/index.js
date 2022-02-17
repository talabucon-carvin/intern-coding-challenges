/* ----ACTIVITY 1---- */
console.log("----ACTIVITY 1----");

//create for loop to display numbers from 0 to 50
// 0 is used as starting point to print initial value
console.log("(1)");

var numArray = [];
for (let i = 0; i <= 50; i++) {
    numArray.push(i)
}
console.log(numArray);


//display only even numbers from 0 to 50
console.log("(2)");

var oddNum = [];
for (let i = 0; i <= 50; i++) {
    //check if i is divisible by 2
    if (i % 2 == 0) {
        oddNum.push(i);
    }
}
console.log(oddNum);


//get sum of all even numbers from 0 to 50
console.log("(3)");

var sumOfEven = 0;
for (let i = 0; i <= 50; i++) {
    //check if i is divisible by 2
    if (i % 2 == 0) {
        //increment all even numbers
        sumOfEven += i;
    }
}
console.log(sumOfEven);


//get sum of all odd numbers from 0 to 50
console.log("(4)");

var sumOfOdd = 0;
for (let i = 0; i <= 50; i++) {
    //check if i is divisible by 2
    if (i % 2 != 0) {
        //increment all odd numbers
        sumOfOdd += i;
    }
}
console.log(sumOfOdd);


//list prime numbers from 0 to 50 and sum
//prime number = can only be divided by 1 or itself
//1 is not a prime number because it can only be divided by itself
console.log("(bonus)");

var primeArray = [];
var sumOfPrime = 0;

// looping from 0 to 50
for (let i = 0; i <= 50; i++) {
    //variable to track prime and not prime numbers
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers = number is prime
    if (i > 1 && flag == 0) {
        primeArray.push(i);
        sumOfPrime += i;
    }
}

console.log(primeArray);
console.log("Sum of prime is " + sumOfPrime);


/* ----ACTIVITY 2---- */
console.log("----ACTIVITY 2----");

//create 4 variables and assign diff values
//display the values in console
console.log("(1)")

let first = 80;
let second = 85;
let third = 90;
let fourth = 95;
console.log("the student's first qtr grade is " + first);
console.log("the student's second qtr grade is " + second);
console.log("the student's third qtr grade is " + third);
console.log("the student's fourth qtr grade is " + fourth);

//compute for avg
// compute and show transmuted grade
console.log("(2)")

//getting avg
var avg = (first + second + third + fourth) / 4;
console.log("the average score is " + avg);

//transmuting grade based on table
var transGrade;
if (avg >= 0 && avg < 55) {
    transGrade = 5.00;
} else if (avg >= 55 && avg < 60) {
    transGrade = 4.00;
} else if (avg >= 60 && avg < 65) {
    transGrade = 3.00;
} else if (avg >= 65 && avg < 70) {
    transGrade = 2.75;
} else if (avg >= 70 && avg < 75) {
    transGrade = 2.50;
} else if (avg >= 75 && avg < 80) {
    transGrade = 2.25;
} else if (avg >= 80 && avg < 84) {
    transGrade = 2.00
} else if (avg >= 84 && avg < 87) {
    transGrade = 1.75
} else if (avg >= 87 && avg < 90) {
    transGrade = 1.50;
} else if (avg >= 90 && avg < 93) {
    transGrade = 1.25
} else if (avg >= 93 && avg <= 100) {
    transGrade = 1.00
}

console.log("transmuted grade is " + transGrade);

//display if passed or failed
console.log("(bonus)");

if (transGrade <= 3) {
    console.log("Student passed with a grade of " + transGrade);
} else {
    console.log("Student failed with a grade of " + transGrade);
}


/* ----ACTIVITY 3---- */
console.log("----ACTIVITY 3----");

//find longest word in a string
function findLongestWord(str) {

    //split string per ' ' or space
    var strSplit = str.split(' ');

    //variable for longest word's length
    var longestWordLength = 0;

    //variable for longest word
    var longestWord = "";

    //now that the string is split, for loop is used to find the longest word using the .length method
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWordLength) {
            //get current longest word's length
            longestWordLength = strSplit[i].length;
            //get current longest word
            longestWord = strSplit[i];
        }
    }

    console.log(str);
    console.log(longestWordLength);
    console.log("Longest word is " + longestWord + " with " + longestWordLength + " characters");


}

findLongestWord('What is the average airspeed velocity of an unladen swallow');
findLongestWord('What if we try a super-long word such as otorhinolaryngology');

/* ----ACTIVITY 4---- */
console.log("----ACTIVITY 4----");

//palindrome check
function palindromeChecker(str) {
    //convert string to lowercase to treat all characters the same
    //split to separate per word
    //reverse function to reverse the string
    //join function to merge the split and reversed string
    var palindrome = str.toLowerCase().split('').reverse().join('');

    var isPalindrome;
    //palindrome checker
    if (palindrome == str.toLowerCase()) {
        isPalindrome = true;
        console.log(isPalindrome);
        console.log(str + " is a palindrome");
    } else {
        isPalindrome = false;
        console.log(isPalindrome);
        console.log(str + " is not a palindrome");
    }
}
palindromeChecker('Able was I ere I saw Elba');



/* ----ACTIVITY 5---- */
console.log("----ACTIVITY 5----");

//convert number to word