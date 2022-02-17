//activity 1 variable declaration
let number, evenTotal, oddTotal, primeNumber, primeTotal, start, finish; 
number = 0;
evenTotal = 0;
oddTotal = 0;
primeNumber = 0;
primeTotal = 0;

//activity 2 variable declaration
let first = 85;
let second = 89;
let third = 90;
let fourth = 94;
let grade;

//activity 3 variable declaration
let longestWord;

//activity 4 variable declaration
let palindromeWord;

//activity 4 variable declaration
let numberWord = 43123;
let numberWordFormat = numberWord.toString();
let numberWordOutput = "";
let compare = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let decimal = ['zero','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine '];
let tenTonineteen = ['ten', 'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
let tens = ['free','free','twenty ', 'thirty ', 'fourty', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
let hundredWord = 'hundred ';
let thousandWord = 'thousand';

function printEven(start,finish){//Print even numbers and sum of odds and evens
    for (start; start<=finish; start++){
        if(start%2==0){
            console.log(start);
            evenTotal += start;
        }
        else{
            oddTotal += start;
        }
    }
    console.log("Prime numbers: ") 
    const primeNumbers = [];//prime numbers storage
    for (let i = 1; i <= 50; i++){
        prime = 0;
        totalPrime = 0;
        for (let a = i; a >= 1; a--){
     
            if(i % a == 0){
                prime = prime + 1;
          
        }
    }
    if (prime == 2){//printing of prime numbers
        console.log( i);
        primeNumbers.push(i);
    }
    }
    let sumOfPrime = 0;
    for (let i = 0; i < primeNumbers.length; i++) {
        sumOfPrime += primeNumbers[i];
    }


    console.log('sum of all even numbers is ' + evenTotal);//print total even
    console.log('sum of all odd numbers is ' + oddTotal);//print total odd
    console.log('sum of all prime numbers is ' + sumOfPrime );

}

function studentGrades(first, second, third, fourth){//display student grades
    let average = 0;

    console.log("The student's first qtr grade is " + first);
    console.log("The student's second qtr grade is " + second);
    console.log("The student's third qtr grade is " + third);
    console.log("The student's fourth qtr grade is " + fourth);
    
    average = (first + second + third + fourth)/4;
    console.log("The average score is " + average);//show transmuted grade

    if (average<=100 && average>=93){
        console.log("transmuted grade is 1.00");
    }
    else if (average<=92 && average>=90) {
        console.log("transmuted grade is 1.25");
    }
    else if (average<90 && average>=87) {
        console.log("transmuted grade is 1.50");
    }
    else if (average<87 && average>=84) {
        console.log("transmuted grade is 1.75");
    }
    else if (average<84 && average>=80) {
        console.log("transmuted grade is 2.00");
    }
    else if (average<80 && average>=75) {
        console.log("transmuted grade is 2.25");
    }
    else if (average<75 && average>=70) {
        console.log("transmuted grade is 2.50");
    }
    else if (average<70 && average>=65) {
        console.log("transmuted grade is 2.75");
    }
    else if (average<65 && average>=60) {
        console.log("transmuted grade is 3.00");
    }
    else if (average<60 && average>=55) {
        console.log("transmuted grade is 4.00");
    }
    else{
        console.log("transmuted grade is 5.00");
    }
    
}
function findLongestWord(str){//find the longest word
    var output = 0
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
      }, "");
      output = longestWord.length;
      console.log("Longest word is with "+ output +" characters");
}

function palindromeCheck(palindromeWord){//function to find out if a word is a palindrome
    
    const palindromeArray = palindromeWord.split('');// convert string to an array

    const reversePalindromeArray = palindromeArray.reverse();// reverse the array values

    const reverseString = reversePalindromeArray.join('');// convert array to string

    if(palindromeWord == reverseString) {
        console.log(palindromeWord + ' is a palindrome');
    }
    else {
        console.log(palindromeWord + ' is not a palindrome');
    }

}
function numberToWord(numberWord){//gg nabaliw na :<
    if (numberWordFormat.length == 6){
        if (numberWord % 100000 == 0){//divisible by hundred thousands
            for(let i = 1; i < compare.length; i++){
                if(numberWordFormat[0] == compare[i]){
                    console.log(decimal[i] + "hundred thousand");
                    break;
                }
            }  
        }
        else{
            for (let j = 1; j <compare.length; j++){//add hundred to string
                if(numberWordFormat[0] == compare[j]){
                    numberWordOutput = decimal[j].concat(hundredWord);
                    break; 
                }    
            }
            if(numberWordFormat[1]==1){//10-19 number wwords
                for (let j = 0; j <compare.length; j++){
                    if(numberWordFormat[2] == compare[j]){
                        numberWordOutput = numberWordOutput.concat(tenTonineteen[j],' thousand');
                        break;
                    }    
                }
            } 
            else{//normal number words
                for (let j = 1; j <compare.length; j++){//tens ending with 0
                    // if (numberWordFormat[1] == 0)
                    if(numberWordFormat[2] == 0 && numberWordFormat[1] == compare[j]){
                        numberWordOutput = numberWordOutput.concat(tens[j],'thousand');
                    }
                    else if (numberWordFormat[2] > 0 && numberWordFormat[1] == compare[j]){
                        for (let j = 1; j <compare.length; j++){//tens ending with normal number
                            if(numberWordFormat[1] == compare[j]){
                                numberWordOutput = numberWordOutput.concat(tens[j]);
                                break;
                            }
                        }
                        for (let j = 1; j <compare.length; j++){
                            if(numberWordFormat[2] == compare[j]){
                                numberWordOutput = numberWordOutput.concat(decimal[j],'thousand');
                                break;
                            }
                        }
                    }    
                }      
            }
            //OTHER HALF
            for (let j = 1; j <compare.length; j++){//add hundred to string
                if(numberWordFormat[3] == compare[j]){
                    numberWordOutput = numberWordOutput.concat(" ",decimal[j],hundredWord);
                    break; 
                }    
            }
            if(numberWordFormat[1]==1){//10-19 number wwords
                for (let j = 0; j <compare.length; j++){
                    if(numberWordFormat[5] == compare[j]){
                        numberWordOutput = numberWordOutput.concat(tenTonineteen[j]);
                        break;
                    }    
                }
            } 
            else{//normal number words
                for (let j = 1; j <compare.length; j++){//tens ending with 0
                    if(numberWordFormat[5] == 0 && numberWordFormat[4] == compare[j]){
                        numberWordOutput = numberWordOutput.concat(tens[j]);
                    }
                    else if (numberWordFormat[5] > 0 && numberWordFormat[4] == compare[j]){
                        for (let j = 1; j <compare.length; j++){//tens ending with normal number
                            if(numberWordFormat[4] == compare[j]){
                                numberWordOutput = numberWordOutput.concat(tens[j]);
                                break;
                            }
                        }
                        for (let j = 1; j <compare.length; j++){
                            if(numberWordFormat[5] == compare[j]){
                                numberWordOutput = numberWordOutput.concat(decimal[j]);
                                break;
                            }
                        }
                    }    
                }      
            }     
        }
        
        
    }
    else if (numberWordFormat.length == 5){//5 digit numbers
        if(numberWordFormat[0]==1){//10-19 number wwords
            for (let j = 0; j <compare.length; j++){
                if(numberWordFormat[1] == compare[j]){
                    numberWordOutput = numberWordOutput.concat(tenTonineteen[j],' thousand');
                    break;
                }    
            }
        } 
        else{//normal number words
            for (let j = 1; j <compare.length; j++){//tens ending with 0
                if(numberWordFormat[1] == 0 && numberWordFormat[0] == compare[j]){
                    numberWordOutput = numberWordOutput.concat(tens[j],'thousand');
                }
                else if (numberWordFormat[1] > 0 && numberWordFormat[0] == compare[j]){
                    for (let j = 1; j <compare.length; j++){//tens ending with normal number
                        if(numberWordFormat[0] == compare[j]){
                            numberWordOutput = numberWordOutput.concat(tens[j]);
                            break;
                        }
                    }
                    for (let j = 1; j <compare.length; j++){
                        if(numberWordFormat[1] == compare[j]){
                            numberWordOutput = numberWordOutput.concat(decimal[j],'thousand');
                            break;
                        }
                    }
                }    
            }      
        }
        //OTHER HALF
        for (let j = 1; j <compare.length; j++){//add hundred to string
            if(numberWordFormat[2] == compare[j]){
                numberWordOutput = numberWordOutput.concat(" ",decimal[j],hundredWord);
                break; 
            }    
        }
        if(numberWordFormat[0]==1){//10-19 number wwords
            for (let j = 0; j <compare.length; j++){
                if(numberWordFormat[4] == compare[j]){
                    numberWordOutput = numberWordOutput.concat(tenTonineteen[j]);
                    break;
                }    
            }
        } 
        else{//normal number words
            for (let j = 1; j <compare.length; j++){//tens ending with 0
                if(numberWordFormat[4] == 0 && numberWordFormat[3] == compare[j]){
                    numberWordOutput = numberWordOutput.concat(tens[j]);
                }
                else if (numberWordFormat[3] > 0 && numberWordFormat[3] == compare[j]){
                    for (let j = 1; j <compare.length; j++){//tens ending with normal number
                        if(numberWordFormat[3] == compare[j]){
                            numberWordOutput = numberWordOutput.concat(tens[j]);
                            break;
                        }
                    }
                    for (let j = 1; j <compare.length; j++){
                        if(numberWordFormat[4] == compare[j]){
                            numberWordOutput = numberWordOutput.concat(decimal[j]);
                            break;
                        }
                    }
                }    
            }      
        }     
    }
    else if (numberWordFormat.length == 4){//4 digit numbers       
        for (let j = 1; j <compare.length; j++){
            if(numberWordFormat[0] == compare[j]){
                numberWordOutput = numberWordOutput.concat(decimal[j],'thousand');
                break;
            }
        }    
        //OTHER HALF
        for (let j = 1; j <compare.length; j++){//add hundred to string
            if(numberWordFormat[1] == compare[j]){
                numberWordOutput = numberWordOutput.concat(" ",decimal[j],hundredWord);
                break; 
            }    
        }
        if(numberWordFormat[2]==1){//10-19 number wwords
            for (let j = 0; j <compare.length; j++){
                if(numberWordFormat[3] == compare[j]){
                    numberWordOutput = numberWordOutput.concat(tenTonineteen[j]);
                    break;
                }    
            }
        } 
        else{//normal number words
            for (let j = 1; j <compare.length; j++){//tens ending with 0
                if(numberWordFormat[3] == 0 && numberWordFormat[2] == compare[j]){
                    numberWordOutput = numberWordOutput.concat(tens[j]);
                }
                else if (numberWordFormat[2] > 0 && numberWordFormat[2] == compare[j]){
                    for (let j = 1; j <compare.length; j++){//tens ending with normal number
                        if(numberWordFormat[2] == compare[j]){
                            numberWordOutput = numberWordOutput.concat(tens[j]);
                            break;
                        }
                    }
                    for (let j = 1; j <compare.length; j++){
                        if(numberWordFormat[3] == compare[j]){
                            numberWordOutput = numberWordOutput.concat(decimal[j]);
                            break;
                        }
                    }
                }    
            }      
        } 
     } 
    else if (numberWordFormat.length == 3){//3 digits numbers
        for (let j = 1; j <compare.length; j++){//add hundred to string
            if(numberWordFormat[0] == compare[j]){
                numberWordOutput = decimal[j].concat(hundredWord);
                break; 
            }    
        }
        if(numberWordFormat[1]==1){//10-19 number wwords
            for (let j = 0; j <compare.length; j++){
                if(numberWordFormat[2] == compare[j]){
                    numberWordOutput = numberWordOutput.concat(tenTonineteen[j]);
                    break;
                }    
            }
        } 
        else{//normal number words
            for (let j = 1; j <compare.length; j++){//tens ending with 0
                if(numberWordFormat[2] == 0 && numberWordFormat[1] == compare[j]){
                    numberWordOutput = numberWordOutput.concat(tens[j]);
                }
                else if (numberWordFormat[1] > 0 && numberWordFormat[1] == compare[j]){
                    for (let j = 1; j <compare.length; j++){//tens ending with normal number
                        if(numberWordFormat[1] == compare[j]){
                            numberWordOutput = numberWordOutput.concat(tens[j]);
                            break;
                        }
                    }
                    for (let j = 1; j <compare.length; j++){
                        if(numberWordFormat[2] == compare[j]){
                            numberWordOutput = numberWordOutput.concat(decimal[j]);
                            break;
                        }
                    }
                }    
            }      
        } 
    }
    else if (numberWordFormat.length == 2){//2 digit numbers
        if(numberWordFormat[0]==1){//10-19 number wwords
            for (let j = 0; j <compare.length; j++){
                if(numberWordFormat[1] == compare[j]){
                    numberWordOutput = tenTonineteen[j];
                    break;
                }    
            }
        } 
        else{//normal number words
            for (let j = 0; j <compare.length; j++){//tens ending with 0
                if(numberWordFormat[1] == 0 && numberWordFormat[0] == compare[j]){
                    numberWordOutput = tens[j];
                    break;
                }
                else{
                    for (let k = 1; k < compare.length; k++){//tens ending with normal number
                        if(numberWordFormat[0] == compare[k]){
                            numberWordOutput = numberWordOutput.concat(tens[k]);
                            
                        }
                    }
                    for (let j = 1; j < compare.length; j++){
                        if(numberWordFormat[1] == compare[j]){
                            numberWordOutput = tens[j].concat(decimal[j]);
                            break;
                        }
                    }
                }    
            }      
        } 
    }
    else{
        for (let j = 0; j <compare.length; j++){
            if(numberWordFormat[0] == compare[j]){
                numberWordOutput = decimal[j];
                break;
            }
        }
    }
    console.log(numberWordOutput);  
    }
    
    
    
    
    

console.log('Activity 1')//activity 1 input
printEven(0,50);//print even numbers

console.log('Activity 2')//activity 2 input
studentGrades(first, second, third, fourth);

console.log('Activity 3')//activity 3 input
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");

console.log('Activity 4')//activity 4 input
palindromeCheck("madams");
palindromeCheck("madam");

console.log('Activity 5')//activity 5 input
numberToWord(numberWord);
