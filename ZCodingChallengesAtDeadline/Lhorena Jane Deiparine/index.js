//ACTIVITY NO. 1 

console.log("ACTIVITY NO. 1 ~~~");
var even = 0; // for the sum even numbers 
var odd = 0;

//For Loop to display numbers 0 to 50
console.log("Numbers from 1 to 50 ~~~");
for (let i = 0; i < 51; i++) {
    
    console.log(i);
}

//For Loop to display even and odd numbers from 0 to 50
console.log("Even Numbers from 1 to 50 ~~~");
for (let i = 0; i < 51; i++) {  
    if (i % 2 == 0){ // to check if the number is an Even Number
        even += i;
        console.log(i);
    } else if (i % 2 == 1){  // to check if the number is an Odd Number
        odd += i;
    }
}


//For the Prime Numbers
console.log("Prime Numbers from 1 to 50 ~~~");
const primeNumbers = []; // array for storing the Prime Numbers
for (let i = 1; i <= 50; i++){
    prime = 0;
    totalPrime = 0;
    for (let a = i; a >= 1; a--){
     
        if(i % a == 0){
            prime = prime + 1;
          
        } 
    }
    if (prime == 2){
        console.log( i);
        primeNumbers.push(i);
    }

    
}

let sumOfPrime = 0;
for (let i = 0; i < primeNumbers.length; i++) {
    sumOfPrime += primeNumbers[i];
}


//Printing the sum of Even and Odd Numbers
console.log("Total Sum of Even Numbers: " + even);
console.log("Total Sum of Odd Numbers: " + odd );
console.log("Total Sum of Prime Numbers: " + sumOfPrime );



//ACTIVITY NO. 2-->

document.write("\n");
console.log("ACTIVITY NO. 2 ~~~ ");
document.write("\n");
    let first = 85;
    let second = 89;
    let third = 90;
    let fourth = 94;

    var average = (first + second + third + fourth) / 4;
    var transmutedGrade;
    

    //Printing of Outputs
    console.log("The student's First Qtr grade is " + first );
    console.log("The student's Second Qtr grade is " + second );
    console.log("The student's Third Qtr grade is " + third );
    console.log("The student's Fourth Qtr grade is " + fourth );

    console.log("The Average score is " + average );


    if(average >= 93){
	    transmutedGrade = 1.00;
    }
    else if (average >= 90){
        transmutedGrade = 1.25;
    }
    else if (average >= 87){
        transmutedGrade = 1.50;
    }
    else if (average >= 84){
        transmutedGrade = 1.75;
    }
    else if (average >= 80){
        transmutedGrade = 2.00;
    }
    else if (average >= 75){
        transmutedGrade = 2.25;
    }
    else if (average >= 70){
        transmutedGrade = 2.50;
    }
    else if (average >= 65){
        transmutedGrade = 2.75;
    }
    else if (average >= 60){
        transmutedGrade = 3.00;
    }
    else if (average >= 55){
         transmutedGrade = 4.00;
    }
    else{
         transmutedGrade = 5.00;
    }

//Printing of Transmuted Grades and Status 
console.log("The transmuted score is: " + transmutedGrade + " and the student's status is " + status(transmutedGrade));


//Function for Status
function status(transmutedGrade) {
    if (transmutedGrade <= 3){
        return "passed";
    }
    else{
        return "failed";
    }
}


//ACTIVITY NO. 3 -->

console.log("ACTIVITY NO. 3 ~~~ ");
function findLongestWordLength(strSentence){
    var strSplit = strSentence.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}


//Printing of outputs
console.log("Longest word is " + findLongestWordLength("What is the average airspeed velocity of an unladen swallow") + " characters");
console.log( "Longest word is "  + findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") + " characters"); 



//ACTIVITY NO. 4  

console.log("ACTIVITY NO. 4 ~~~ ");
function isPalindrome (str) {  
    const splitString = str.toLowerCase().split('').join('');
    const revString = str.toLowerCase().split('').reverse().join('');

    if (splitString == revString) {  
        console.log( str + ' is a Palindrome string'); // print the Palindrome   
    }  
    else {  
        console.log (str + ' is not Palindrome string' ); // if the condition is not true.  
    }  
}  
isPalindrome("Able was I ere I saw Elba"); // call the function  


//ACTIVITY NO. 5

console.log("ACTIVITY NO. 5 ~~~ ");


