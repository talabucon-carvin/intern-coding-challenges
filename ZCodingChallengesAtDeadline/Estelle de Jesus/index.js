
//Activity 1
var sumEven = 0;
var sumOdd = 0;
var sumPrime = 0;

console.log("Numbers from 1 to 50:");
for (let i = 0; i < 51; i++) { //getting of 1 to 50 numbers
    console.log(i);

}    

console.log("\nEven numbers:");
for (let i = 0; i < 51; i++) { //getting of 1 to 50 numbers
    if (i % 2 == 0) { //checking if even
        console.log(i); //printing of even nums 
        sumEven += i; //total of even numbers
    } else { //all that are not even will go here
        sumOdd += i; //total of odd numbers
    }
}    

    console.log("Total of Even Numbers: " + sumEven); //print sum 
    console.log("Total of Odd Numbers: " + sumOdd);//print sum 
    console.log("\nPrime Numbers: "); 

    for (let i = 1; i <= 50; i++){ //loop for checking prime numbers
        prime = 0;
        for (let a = i; a >= 1; a--){ //checking of prime numbers
            if(i % a == 0){
                prime += 1;
            }
        }
        if (prime == 2){ //if equals to 2, prime.
            console.log(i); //print prime numbers
            sumPrime += i;
        }
    }
    console.log("Prime Numbers: " + sumPrime); //print total prime numbers
    

//Activity 2

    //grades
    let first = 85;
    let second = 89;
    let third = 90;
    let fourth = 94;

    let average = (first+second+third+fourth)/4; //compute of average
    //displaying of grades
    console.log("\nThe student's first quarter grade is: " + first);
    console.log("The student's second quarter grade is: " + second);
    console.log("The student's third quarter grade is: " + third);
    console.log("The student's fourth quarter grade is: " + fourth);

    console.log("The average score is: " + average); //printing of average
    
    //checking of transmuted grade
    if (average >= 93) { 
        console.log("The transmuted grade is: 1.00 and the student's status is passed."); 
    } else if(average >= 90) { 
        console.log("The transmuted grade is: 1.25 and the student's status is passed."); 
    } else if(average >= 87) { 
        console.log("The transmuted grade is: 1.50 and the student's status is passed."); 
    } else if(average >= 84) { 
        console.log("The transmuted grade is: 1.75 and the student's status is passed."); 
    } else if(average >= 80) { 
        console.log("The transmuted grade is: 2.00 and the student's status is passed."); 
    } else if(average >= 75) { 
        console.log("The transmuted grade is: 2.25 and the student's status is passed."); 
    } else if(average >= 70) { 
        console.log("The transmuted grade is: 2.50 and the student's status is passed."); 
    } else if(average >= 65) { 
        console.log("The transmuted grade is: 2.75 and the student's status is passed."); 
    } else if(average >= 60) { 
        console.log("The transmuted grade is: 3.00 and the student's status is passed."); 
    } else if(average >= 55) { 
        console.log("The transmuted grade is: 4.00 and the student's status is failed."); 
    } else if(average >= 0) { 
        console.log("The transmuted grade is: 5.00 and the student's status is failed."); 
    }

//Activity 3
    var strSplit1 = "What is the average airspeed velocity of an unladen swallow".split(" ")
    var strSplit2 = "What if we try a super-long word such as otorhinolaryngology".split(" ")
    
    function findLongestWordLength(str) { //function for checking longest word
        var longestWord = 0;
        for(var i = 0; i < str.length; i++){
          if(str[i].length > longestWord){ // length of a word > longest word recorded
          longestWord = str[i].length;
           }
        }
        return longestWord; //return length of the longest word
      }
      //calling of function
      console.log("\nLongest word is with " + findLongestWordLength(strSplit1) + " characters"); 
      console.log("Longest word is with " + findLongestWordLength(strSplit2) + " characters");

//Act 4

      var stringSplit;
      var stringSplitReverse;

      function palindromeYesNo(str) { //palindrome function
        var stringSplit = str.toLowerCase().split("").join(""); //original string
        var stringSplitReverse = str.toLowerCase().split("").reverse().join(""); //reversed string
        
        if(stringSplit == stringSplitReverse){ // checking if both are same
            console.log("\nTrue");
            console.log(str + " is a palindrome.");
        }else{
            console.log("\nFalse");
            console.log(str + " is not a palindrome.");
        }
      }

      //calling of function
      palindromeYesNo("Able was I ere I saw Elba")
      palindromeYesNo("123")
      palindromeYesNo("1881")
      
