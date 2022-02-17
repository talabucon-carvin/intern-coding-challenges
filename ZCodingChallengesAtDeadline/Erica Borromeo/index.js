//ACTIVITY #1
// loop to display numbers from 0 to 50    
console.log("Displaying numbers from 0 to 50  ")
for(let i = 0 ; i < 51; i++){ //iterating through the number 50 to display all the numbers 0 to 50. 51 to display the 5 itself
    console.log(i)
}


//loop to display even numbers from 0 to 50
console.log("Displaying even numbers from 0 to 50  ")

for(let i = 0; i <= 50 ; i++){
    if(i % 2 == 0){ //checking if the condition of i modulo 2 is equal to 0 which is to check if the value is an even number
        console.log(i)

    }
}


// sum of all even numbers from 0 to 50, 650
let evenSum = 0;
for(let i = 0; i <= 50 ; i++){  
    if(i % 2 == 0){
        evenSum += i; //assigning the value of i + evenSum to evenSum,  adding the current value of evenSum to the new iterative value until all the even numbers are added
    }
}
console.log("The sum of even numbers from 0 to 50 is " + evenSum);


// sum of all odd numbers  from 0 to 50, 625
let oddSum = 0;
for(let i = 0; i < 50 ; i++){
    if(i % 2 != 0){ //checking if the condition i modulo 2 is not equal to 0 to check if the value is an even number
        oddSum = oddSum + i;
    }
}
console.log("The sum of odd numbers from 0 to 50 is " + oddSum);


// prime numbers from 0 to 50 and sum
console.log("Displaying prime numbers from 0 to 50  ")

for (let i = 0; i <= 50; i++) {
    let num = 0;

   for (let j = 2; j < i; j++) {
        if (i % j == 0) { 
            num = 1;
            break;
        }
    }

   if (i > 1 && num == 0) {
        console.log(i);
    }
}

//ACTIVITY #2

let first = 85;
let second = 89;
let third = 90;
let fourth= 94;



console.log("The student's first qtr grade is " + first);
console.log("The student's second qtr grade is " + second);
console.log("The student's third qtr grade is " + third);
console.log("The student's fourth qtr grade is " + fourth);


let averageScore; 
averageScore = (first + second + third + fourth) / 4; //getting  the average of the four grades

console.log("The student's average score is " + averageScore);

let transmutedGrade;
// Getting the equivalent of the average grade
if(averageScore >= 93 && averageScore <= 100){
    transmutedGrade = 1.00;
}
else if(averageScore >= 90 && averageScore <= 93){
    transmutedGrade = 1.25;
}
else if(averageScore >= 87 && averageScore <= 90){
    transmutedGrade = 1.50;
}
else if(averageScore >= 84 && averageScore <= 87){
    transmutedGrade = 1.75;
}
else if(averageScore >= 80 && averageScore <= 84){
    transmutedGrade = 2.00;
}
else if(averageScore >= 75 && averageScore <= 80){
    transmutedGrade = 2.25;
}
else if(averageScore >= 70 && averageScore <= 75){
    transmutedGrade = 2.50;
}
else if(averageScore >= 65 && averageScore <= 70){
    transmutedGrade = 2.75;
}
else if(averageScore >= 60 && averageScore <= 65){
    transmutedGrade = 3.00;
}
else if(averageScore >= 55 && averageScore <= 60){
    transmutedGrade = 4.00;
}
else if(averageScore >= 0 && averageScore <= 55){
    transmutedGrade = 5.00;
}
else{
    console.log("Error");
}

let remarks;
//Checking if the transmuted grade is passed or failed

if(transmutedGrade <= 3.00 ){
    remarks = "passed";
}
else if(transmutedGrade > 3.00){
    remarks = "failed"
}
console.log("The transmuted grade is : " + transmutedGrade + " and the student's status is " + remarks );


// ACTIVITY #3

function findLongestWord(wordStr){
    let longestWordLength = 0 ;
    let word = wordStr.split(' '); //to split every word into an array 

    for (let i = 0; i < word.length; i++) { //looping through every word
        if ( word[i].length > longestWordLength){
            longestWordLength = word[i].length; //setting the length of every word until the value of the longestWordlength is the highest

        } 
    }
    return longestWordLength;
}

let longest = findLongestWord("What is the average airspeed velocity of an unladen swallow");
console.log("Longest word is with " + longest + " characters")


//#ACTIVITY #4


function theWord(palindrome){
    thePalindrome = palindrome.length; //getting the length of the word

    for(let i = 0; i < thePalindrome / 2; i++){ //splitting the word into two, to test if the characters match
        if(palindrome[i] !== palindrome[thePalindrome - 1 - i]){
            return console.log(palindrome + " is not a palindrome"); //when the characters don't match, 
        }
       
    }
    return console.log(palindrome + " is a palindrome");


}

theWord("test");


//ACTIVITY #5
//input number to word 

numToWord(12345);

function numToWord(num) {

    let numToString = num.toString();

    set1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    set2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    set3 = ['', 'thousand', 'million'];

    start = numToString.length;
    numSet = [];
    while (start > 0) {
        end = start;
        numSet.push(numToString.slice((start = Math.max(0, start - 3)), end));
    }

    numSetLen = numSet.length;
    if (numSetLen > set3.length) {
        return '';
    }

    words = [];
    for (i = 0; i < numSetLen; i++) {

        wordSet = parseInt(numSet[i]);

        if (wordSet) {

           
            theNum = numSet[i].split('').reverse().map(parseFloat); //split into an array of integers

          
            if (theNum[1] === 1) {
                theNum[0] += 10;
            }

            if ((word = set3[i])) {
                words.push(word);
            }

            if ((word = set1[theNum[0]])) {
                words.push(word);
            }
            // add tens word
            if ((word = set2[theNum[1]])) {
                words.push(word);
            }
            //add hundreds word
            if ((word = set1[theNum[2]])) {
                words.push(word + ' hundred');
            }

        }

    }

    console.log(words.reverse().join(' '));

}