//PROBLEM #1
for (var i = 0; i <= 50; i++){ //Printing of all numbers from 0 - 51
    console.log(i)
}
console.log(" ")

var sumOfEvenNumbers = 0; //declaration of variable of sum of even numbers.
var sumofOddNumbers = 0; //declaration of variable of sum of odd numbers.

for (var j = 0; j <= 50; j++){ //for loop for the even numbers.
    if ( j % 2 == 0){
        console.log("The even numbers are: " + j) //printing of even numbers.
        sumOfEvenNumbers += j;
    }
    else{
        console.log()
        sumofOddNumbers += j;
    }
}

console.log("  ")
console.log("The total of even numbers are: " + sumOfEvenNumbers) //printing of the total output of even numbers.
console.log("The total of odd numbers are: " + sumofOddNumbers) //printing of the total output of odd numbers.
console.log("  ")

//PROBLEM #2
let first = 85; //variable for first
let second = 89; //variable for second
let third = 90; //variable for third
let fourth = 94; //variable for fourth
let averageOfTheFourGrades = 0; //variable for average of the grades.

console.log("The student's first quarter grade is " + first) //Display of first grade
console.log("The student's first quarter grade is " + second) //Display of second grade
console.log("The student's first quarter grade is " + third) //Display of third grade
console.log("The student's first quarter grade is " + fourth) //Display of fourth grade

averageOfTheFourGrades = (first + second + third + fourth) / 4 //formula for the average.

console.log(" ")
console.log("The average score is " + averageOfTheFourGrades) //Display of average grades.
console.log(" ")

var message = " "; //declaration of variable message for the output.
var transmuted = 0.0; //declartion of variable transmuted grade.

if(averageOfTheFourGrades >= 93){
	transmuted = 1.00;
}
else if (averageOfTheFourGrades >= 90){
	transmuted = 1.25;
}
else if (averageOfTheFourGrades >= 87){
	transmuted = 1.50;
}
else if (averageOfTheFourGrades >= 84){
	transmuted = 1.75;
}
else if (averageOfTheFourGrades >= 80){
	transmuted = 2.00;
}
else if (averageOfTheFourGrades >= 75){
	transmuted = 2.25;
}
else if (averageOfTheFourGrades >= 70){
	transmuted = 2.50;
}
else if (averageOfTheFourGrades >= 65){
	transmuted = 2.75;
}
else if (averageOfTheFourGrades >= 60){
	transmuted = 3.00;
}
else if (averageOfTheFourGrades >= 55){
	transmuted = 4.00;
}
else{
	transmuted = 5.00;
}

if (transmuted <= 3.00){
	message = "The transmuted grade is: " + transmuted + " and the student's status is passed.";
    console.log(message) //display if the student is passed.
}
else{
	message = "The transmuted grade is: " + transmuted + " and the student's status is failed.";
    console.log(message) //display if the student is failed.
}
console.log(" ")

//PROBLEM #3
function findLongestWord(str){

	var strSplit = str.split(" "); //declaring a variable with split method.
	var longestword = 0; //declaring a variable name of longestword

	for(var i = 0; i < strSplit.length; i++){
		if(strSplit[i].length > longestword){ // If strSplit[i].length is greater than the word it is compared with
			longestword = strSplit[i].length; // then the new variable "longestword" takes the value.
		}
	}
	return longestword; //return the longest word.
}

console.log("Longest word is with " + findLongestWord("What is the average airspeed velocity of an unladen swallow") + " characters.");
console.log("Longest word is with " + findLongestWord("What if we try a super-long word such as otorhinolaryngology") + " characters.");
console.log(" ")

//PROBLEM #4 PALINDROME
function check_palindrome(str){ //function that check str is palindrome or not
   let j = str.length -1;
   for( let i = 0 ; i < j/2 ; i++){
        let x = str[i]; //forward character
        let y = str[j-i]; //backward character
        if(x != y){ //return false if string not match
            return false;
        }
   }
   return true;// return true if string is palindrome
}

function is_palindrome(str){ //function that print output is string is palindrome
    let answer = check_palindrome(str); // variable that is true ig string is pallindrome 
    if( answer == true ){ //condition checking answer is true or not
        console.log(test +" is a palindrome."); //Display if the palindrome is correct.
    }else{
        console.log(test2 + " is not a palindrome."); //Display if the palindrome is incorrect.
    }
}
//Test Output
let test = "1881";
is_palindrome(test);
//Test Output #2
let test2 = "Able was I ere I saw Elba";
is_palindrome(test2);

//PROBLEM #5
