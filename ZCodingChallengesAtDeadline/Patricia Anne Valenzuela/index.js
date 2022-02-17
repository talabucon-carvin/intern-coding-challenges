console.log('***** ACTIVITIES! *****');

console.log('-----------------Activity 1: Count from 1 to 50 -----------------');

for (let numbers = 0; numbers <= 50; numbers++) {
    console.log(numbers);
  }

  console.log('-----------------Activity 1: Even Numbers -----------------');

  let sum = 0;

  for (let even = 0; even <= 50; even++) {
    console.log(even);
    sum += even;
    even +=1;
    
}

console.log('Sum of the even numbers: ' + sum)

console.log('-----------------Activity 1: Odd Numbers -----------------');
let sumOdd = 0;

for (let odd = 1; odd <= 50; odd++) {
    console.log(odd);
    sumOdd+=odd;
    odd +=1;
    
}
console.log('Sum of Odd numbers: ' + sumOdd)

console.log('-----------------Activity 1: Prime Numbers-----------------');
let prime;
let primeSum = 0;

for (prime = 2; prime <= 50; prime++) {
   if(prime%2 != 0 && prime%6 != 3 && prime%6 != 0 && prime%9 != 0 && prime%5 != 0 && prime%7 != 0) { //Divisibility Rules
        console.log(prime);
        primeSum += prime;
        
   }
    else if(prime == 2 || prime == 7 || prime ==3 || prime == 5) { //Real Prime Numbers
        console.log(prime)
        primeSum += prime;
    }
}
console.log('Sum of Prime numbers: ' + primeSum);


console.log('--------------Activity #2: Display Average--------------');
//Variables
let first = 85;
let second = 89;
let third = 90;
let fourth = 94;
let average = (first + second + third + fourth)/4;


console.log('Display the grades in the console:');
console.log("the student's first qtr grade is " + first);
console.log("the student's first qtr grade is " + second);
console.log("the student's first qtr grade is " + third);
console.log("the student's first qtr grade is " + fourth);

//For Displaying if pass or failed
let scores = average;
let scoreOutput;
let scoreRemarks = 'passed';
console.log('The average score is ' + scores);

if(scores >= 93 && scores <= 100) {
   scoreOutput = '1.00';
} else if(scores >= 90 && scores <= 93) {
    scoreOutput = '1.25';
} else if(scores >= 87 && scores <= 90) {
    scoreOutput = '1.50';
} else if(scores >= 84 && scores <= 87) {
    scoreOutput = '1.75';
} else if(scores >= 80 && scores <= 84) {
    scoreOutput = '2.00';
} else if(scores >= 75 && scores <= 80) {
    scoreOutput = '2.25';
} else if(scores >= 70 && scores <= 75) {
    scoreOutput = '2.50';
} else if(scores >= 65 && scores <= 70) {
    scoreOutput = '2.75';
} else if(scores >= 60 && scores <= 65) {
    scoreOutput = '3.00';
} else if(scores >= 55 && scores <= 60) {
    scoreOutput = '4.00';
     scoreRemarks = 'failed';
} else if(scores >= 0 && scores <= 55) {
    scoreOutput = '5.00';
    scoreRemarks = 'failed';
}

console.log('--------------Activity #2 BONUS--------------');
console.log("The transmuted grade is: " + scoreOutput + " and the student's status is " + scoreRemarks);


console.log('--------------Activity #3: Find the Longest Word--------------');

let word1 = "What is the average airspeed velocity of an unladen swallow";
let word2 = "What if we try a super-long word such as otorhinolaryngology";

function findLongestWord1(word) {
    let wordSplit = word.split(' '); //split muna
    console.log(wordSplit); // array splitted words
    console.log('length ' + wordSplit.length);
    let myArray = new Array(); //iistore dito yung length ng each word
   
    for (let ctr = 0; ctr < wordSplit.length; ctr++) {
        console.log(wordSplit[ctr].length) //length per word sa array
        myArray += parseInt(wordSplit[ctr].length) + ' ';    
       // console.log(myArray);
    }

    let sortedArray = myArray.split(' ').sort();
     console.log('sort: ' + sortedArray);
     console.log('Longest Word: ' + sortedArray[sortedArray.length - 1]);
}

findLongestWord1(word1);


console.log('--------------Activity #4--------------');

function palindromeChecker(word) {
    let regex = /[\W_]/g;
    let originalWord = word.toLowerCase().replace(regex, '');
    var reverseWord = originalWord.split('').reverse().join(''); 
    console.log('text: ' + originalWord);

    if(reverseWord === originalWord) {
        console.log('palindrome');
    } else {
        console.log('false');
    }

}

palindromeChecker('Able was I ere I saw Elba');
palindromeChecker('dad');


console.log('--------------Activity #5: Convert number to word --------------');

function numberToWord() {

    let number = 1881;
    let ones, tens, hundreds, thousands;

    let onesPerWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tensPerWord = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundredsPerWord  = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];;
    let thousandsPerWord = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    //ONES
    if(number%10 == 0) {
          ones = onesPerWord[0];
    } else if (number%10 == 1){
          ones = onesPerWord[1];
    } else if (number%10 == 2){
        ones = onesPerWord[2];
    } else if (number%10 == 3) {
        ones = onesPerWord[3];
    } else if (number%10 == 4){
        ones = onesPerWord[4];
    } else if (number%10 == 5){
        ones = onesPerWord[5];
    }  else if (number%10 == 6){
        ones = onesPerWord[6];
   } else if (number%10 == 7){
    ones = onesPerWord[7];
   } else if (number%10 == 8){
    ones = onesPerWord[8];
    }  else {
        ones = onesPerWord[9];
    }  


      //TENS
      console.log('num' + (number % 100) *1)
     
    if ((number % 100) >= 20 && number % 100 <= 29){
      tens = tensPerWord[2];
  } else if ((number % 100) >= 30 && number % 100 <= 39) {
    tens = tensPerWord[3];
  } else if ((number % 100) >= 40 && number  % 100<= 49){
    tens = tensPerWord[4];
  } else if ((number % 100) >= 50 && number % 100 <= 59){
    tens = tensPerWord[5];
  }  else if ((number % 100) >= 60 && number % 100 <= 69){
    tens = tensPerWord[6];
 } else if ((number % 100) >= 70 && number % 100 <= 79){
    tens = tensPerWord[7];
 } else if ((number % 100) >= 80 && number % 100 <= 89){
    tens = tensPerWord[8];
  }  else {
    tens = tensPerWord[9];
      }  

        //HUNDREDS
        console.log('num' + (number % 1000) *1)
     if((number % 1000) >= 100 && number % 1000 <= 199) {
        hundreds = hundredsPerWord[1];
     }
       else if ((number % 1000) >= 200 && number % 1000 <= 299){
            hundreds = hundredsPerWord[2];
      } else if ((number % 1000) >= 300 && number % 1000 <= 399) {
        hundreds = hundredsPerWord[3];
      } else if ((number % 1000) >= 400 && number  % 1000<= 499){
        hundreds = hundredsPerWord[4];
      } else if ((number % 1000) >= 500 && number % 1000 <= 599){
        hundreds = hundredsPerWord[5];
      }  else if ((number % 1000) >= 600 && number % 1000 <= 699){
        hundreds = hundredsPerWord[6];
     } else if ((number % 1000) >= 700 && number % 1000 <= 799){
        hundreds = hundredsPerWord[7];
     } else if ((number % 1000) >= 800 && number % 1000 <= 899){
        hundreds = hundredsPerWord[8];
      }  else {
        hundreds = hundredsPerWord[9];
          }  
          
            //THOUSANDS
        if((number % 10000) >= 1000 && number % 10000 <= 1999) {
           thousands = thousandsPerWord[1];
        }
          else if ((number % 10000) >= 2000 && number % 10000 <= 2999){
            thousands = thousandsPerWord[2];
         } else if ((number % 10000) >= 3000 && number % 10000 <= 3999) {
            thousands = thousandsPerWord[3];
         } else if ((number % 10000) >= 4000 && number  % 10000<= 4999){
            thousands = thousandsPerWord[4];
         } else if ((number % 10000) >= 5000 && number % 10000 <= 5999){
            thousands = thousandsPerWord[5];
         }  else if ((number % 10000) >= 6000 && number % 10000 <= 6999){
            thousands = thousandsPerWord[6];
        } else if ((number % 10000) >= 7000 && number % 10000 <= 7999){
            thousands = thousandsPerWord[7];
        } else if ((number % 10000) >= 8000 && number % 10000 <= 8999){
            thousands = thousandsPerWord[8];
         }  else {
            thousands = thousandsPerWord[9];
             }  
             
      
    console.log( thousands + ' thousand ' + hundreds + ' hundred ' + tens + ' ' + ones);

    




}

numberToWord();