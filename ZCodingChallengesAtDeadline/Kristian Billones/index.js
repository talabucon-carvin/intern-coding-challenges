//hdoawhioawdhioahdiaohdaiodhawidhaoiwdhaoidhaoidhaiodhaiodhawiohaodaw

//declare a variable that will hold the sum

var sumEven = 0;
var sumOdd = 0;

for(var i = 0; i <= 50; i++){  //this for loop is used to access numbers 0-50
	if(i % 2 == 0){
		console.log(i); //printing of i as number
		sumEven = sumEven + i; //adding of i if its even
	}
	else{
		sumOdd = sumOdd + i; // adding of i if its odd
	}
	
}

console.log("Sum of even numbers: " + sumEven);
console.log("Sum of odd numbers: " + sumOdd);

console.log("");

//2nd activity

let first = 85;
let second = 89;
let third = 90;
let fourth = 94;

console.log("the student's first qtr grade is " + first);
console.log("the student's second qtr grade is " + second);
console.log("the student's third qtr grade is " + third);
console.log("the student's fourth qtr grade is " + fourth);
console.log("");

var cumulativeSum = 0;
cumulativeSum = first + second + third + fourth;
var average = 0.0;
average = cumulativeSum  / 4; //this formula gets the average

console.log("the average score is: " + average);

var message = " ";
var transmuted = 0.00;

if(average >= 93){ //the following if else will determine the transmuted grade of the student based on his/her average
	transmuted = 1.00;
}
else if (average >= 90){
	transmuted = 1.25;
}
else if (average >= 87){
	transmuted = 1.50;
}
else if (average >= 84){
	transmuted = 1.75;
}
else if (average >= 80){
	transmuted = 2.00;
}
else if (average >= 75){
	transmuted = 2.25;
}
else if (average >= 70){
	transmuted = 2.50;
}
else if (average >= 65){
	transmuted = 2.75;
}
else if (average >= 60){
	transmuted = 3.00;
}
else if (average >= 55){
	transmuted = 4.00;
}
else{
	transmuted = 5.00;
}

if (transmuted <= 3.00){
	message = "The transmuted grade is " + transmuted + " and the student's status is passed.";
	console.log(message);
}
else{
	message = "The transmuted grade is " + transmuted + " and the student's status is failed.";
	console.log(message);
}

console.log(" ");

function longestWord(str){ //this function is uses split and length function to explode it in an array and checks the length of every word
	
	var strSplit = str.split(" ");
	
	var wordMax = 0;

	for(var i = 0; i < strSplit.length; i++){
		if(strSplit[i].length > wordMax){
			wordMax = strSplit[i].length;
		}
	}
	return wordMax;
}

console.log("longest word is with " + longestWord("What is the average airspeed velocity of an unladen swallow") + " characters");
console.log("longest word is with " + longestWord("What if we try a super-long word such as otorhinolaryngology")  + " characters");


//4th activity

function palindrome(str){
	
	const splitString = str.toLowerCase().split('').join('');
    const reverseString = str.toLowerCase().split('').reverse().join('');

    if (splitString == reverseString) {  
        console.log('It is a Palindrome string'); // return true if the word or a string is a palindrome
    }  
    else {  
        console.log ('It is not Palindrome string' ); // return false if it doesnt satisfy the condition
    }  

}

var input = window.prompt("Enter the string to be tested: ");
palindrome(input);

