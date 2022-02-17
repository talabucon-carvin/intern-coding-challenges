
//0-50
console.log("Activity 1")
for (let input = 1; input <= 50; input++) {
    console.log(input);
   }

//display even numbers from 0-50
console.log("\ndisplay even numbers from 0-50")
for (let input = 1; input <= 50; input++) {

    if(input%2==0)
    console.log(input);
   }


//sum of all even numbers from 0-50 //650
console.log("\nsum of all even numbers from 0-50")
let sumEven=0 
for(a=1;a<=50;a++)
{
  if(a%2==0)
  {
    sumEven=sumEven+a
  }
}
console.log(sumEven)


//sum of all odd numbers //625
console.log("\nsum of all odd numbers from 0-50")
let sumOdd = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 1)
  {
    sumOdd = sumOdd+i
  }
  
}
console.log(sumOdd);

console.log("\nActivity 2")

let first = 85;
let second = 89;
let third = 90;
let fourth = 94;

console.log("The student's first qtr grade is " + first);
console.log("The student's first qtr grade is " + second);
console.log("The student's first qtr grade is " + third);
console.log("The student's first qtr grade is " + fourth);

//average
let ave = 0;
let total = first + second + third + fourth;
ave = total/4;
str =  "The average score is: ";
console.log( `${str}` + ave);

let trans = 0;
let stat = 'passed';

//To check average 
if (ave >= 93 && ave <= 100){
    trans = 1.00;    
} 
else if (ave >= 90 && ave <= 93) {
    trans = 1.25;
} 
else if (ave >= 87 && ave <= 90) {
    trans = 1.5;
} 
else if (ave >= 84 && ave <= 87) {
    trans = 1.75;
} 
else if (ave >= 80 && ave <= 84) {
    trans = 2.00;
} 
else if (ave >= 75 && ave <= 80) {
    trans = 2.25;
} 
else if (ave >= 70 && ave <= 75) {
    trans = 2.50;
} 
else if (ave >= 65 && ave <= 70) {
    trans = 2.75;
} 
else if (average >= 60 && average <= 65) {
    trans = 3.00;
} 
else if (average >= 55 && average <= 60) {
    trans = 4.00;
    stat = 'failed';
} 
else if (average >= 0 && average <= 55) {
    trans = 5.00;
    stat = 'failed';
} 

//print output
console.log("The transmuted grade is: " + trans + " and the student's status is " + stat);




console.log("\nActivity 3")

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
var longestWordLength= findLongestWord("What is the average airspeed of an velocity of an unladen swallow");
console.log(longestWordLength);

//activity4
console.log("\nActivity 4")
var string = "Able was I ere I saw Elba";
var reverse = "";

for(var i = string.length; i >= 0 ; i--){
    reverse += string.charAt(i).toLowerCase()
}

//to ouput
if(reverse === string.toLowerCase){
    console.log(`${string} is a palindrome`);
}
else{
    console.log(`${string} is not a palindrome`);
}

//to check if t/f
console.log(string===reverse);


//activity5
console.log("\nActivity 5")
var number = 999999;

var millions = Math.floor((number % 10000000 / 1000000));
var hundredThousands = Math.floor((number % 1000000 / 100000));
var tenThousands = Math.floor((number % 100000 / 10000));
var thousands = Math.floor((number % 10000 / 1000));
var hundreds = Math.floor((number % 1000 / 100));
var tens = Math.floor(number % 100 / 10);
var ones = Math.floor(number % 10)
var tenPlusThousands = Math.floor((number % 100000 / 1000));
var tenPlus = Math.floor(number % 100)


var units = ["million ", "thousand ", "hundred ", '']

var byOnes = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ',
    'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ',
    'seventeen ', 'eighteen ', 'nineteen '];


var byTens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ',
    'ninety '];

var word = ""


if (millions) {
    word += byOnes[millions] + units[0]
}
if (hundredThousands) {
    word += byOnes[hundredThousands] + units[2]
}


if (tenThousands !== 1) {
    word += byTens[tenThousands]
    if (thousands) {
        word +=  byOnes[thousands] + units[1]
    }
}
else {
    if (tenPlusThousands)
        word += byOnes[tenPlusThousands] + units[1]
}

if (hundreds) {
    word += byOnes[hundreds] + units[2]
}

if (tens !== 1) {
    word += byTens[tens]
    if (ones) {
        word += byOnes[ones]
    }
}
else {
    if (tenPlus)
        word += byOnes[tenPlus]
}

console.log(word)