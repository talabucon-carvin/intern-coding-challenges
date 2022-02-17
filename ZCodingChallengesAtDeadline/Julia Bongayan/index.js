console.log("-----Activity 1-------");

//Create a for loop to display numbers from 0 to 50
for (var number = 1; number <= 50; number++) {
    console.log(number);
   }

//Display only even numbers from 0 to 50
console.log("--Even numbers--");
for(i=0; i<=50; i++){
    //  divide the value by 2
    // if the remainder is zero then it's an even number
   
    if(i % 2 == 0){
      console.log(i);
    }
  }

//sum of even numbers from 0 to 50
var summ=0; 
var i; 
    for(i=0; i<=50;i=i+2) 
    summ+=i; //value of sum is the i=i+2
    console.log("The Sum of even number is " +summ);
//sum of odd numbers from 0 to 50
  
var summ=0;  
for(i=1;i<=50;i=i+2) //i variable will start to 1
    summ+=i; //the sum is assigned to the value of i variable
    console.log("The Sum of odd number is " +summ);

//Prime Numbers
console.log("List of Prime Numbers from 0-50");
let SumofPrime= 0;

for (var i = 1; i <= 50; i++) {
    let primeNumbers = 0;
        for (let number = i; number >= 1; number--){ //checking of prime numbers
            if(i % number == 0){
                primeNumbers += 1;
            }
        }
        if (primeNumbers == 2){ //if equals to 2, prime.
            console.log(i); //print prime numbers
            SumofPrime += i;
        }
    }
    console.log("The sum of prime numbers from 0-50 is: " + SumofPrime); 

//Activity 2
console.log("-----Activity 2-------");
//Create four variables
var first = 85;
var second = 89;
var third = 90;
var fourth = 94;

//display the grades
console.log("The student's first qtr grade is " + first);
console.log("The student's second qtr grade is " + second);
console.log("The student's third qtr grade is " + third);
console.log("The student's fourth qtr grade is " + fourth);

//Compute for the average 
var average = 0;
var totalscore = first + second + third + fourth;
average = totalscore/4;
console.log("the average score is " + average);

//Compute and show the transmuted grade
var grade = 0;
var display = 'passed'
if(average >= 93 && average  <= 100) {
    grade = '1.00';
 } else if(average >= 90 && average  <= 93) {
     grade = '1.25';
 } else if(average  >= 87 && average  <= 90) {
     grade = '1.50';
 } else if(average  >= 84 && average  <= 87) {
    grade = '1.75';
 } else if(average  >= 80 && average  <= 84) {
    grade = '2.00';
 } else if(saverage  >= 75 && average  <= 80) {
    grade = '2.25';
 } else if(average  >= 70 && average  <= 75) {
    grade = '2.50';
 } else if(average  >= 65 && average  <= 70) {
    grade = '2.75';
 } else if(average  >= 60 && average  <= 65) {
    grade = '3.00';
 } else if(average  >= 55 && average  <= 60) {
    grade = '4.00';
     display = 'failed';
 } else if(average  >= 0 && average  <= 55) {
    grade = '5.00';
     display = 'failed';
 }
console.log("The transmuted grade is: " + grade + " and the student's status is " + display);


// Activity 3
 console.log("-----Activity 3-------");

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
  console.log("The longest word is with " + findLongestWordLength("What is the average airspeed velocity of an unladen swallow") + " characters");
  console.log("The longest word is with " + findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") + " characters");
  
  
  console.log("-----Activity 4-------");
  //Activty 4
  function Palindrome (str) {  
   
    const splitString = str.toLowerCase().split('').join('');
    const reverseString = str.toLowerCase().split('').reverse().join('');

    if (splitString == reverseString) {  
        console.log('The given word,verse,or sentence is a Palindrome string');   
    }  
    else {  
        console.log ('The given word,verse, or sentence is not Palindrome string' ); // if the condition is not true.  
    }  
}  

Palindrome("Able was I ere I saw Elba");

 // call the function  


      

//Activity 5 
console.log("-----Activity 5-------");
      
var number = 1211012;
//Math.floor this function returns the largest integer less than or equal to a given number.
var millions = Math.floor((number % 10000000 / 1000000));
var hundredThousands = Math.floor((number % 1000000 / 100000));
var tenThousands = Math.floor((number % 100000 / 10000));
var thousands = Math.floor((number % 10000 / 1000));
var hundreds = Math.floor((number % 1000 / 100));
var tens = Math.floor(number % 100 / 10);
var ones = Math.floor(number % 10)
var tenPlusThousands = Math.floor((number % 100000 / 1000));
var tenPlus = Math.floor(number % 100)

console.log(millions,hundredThousands,tenThousands, thousands,hundreds,tens,ones)
console.log(tenPlusThousands)

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