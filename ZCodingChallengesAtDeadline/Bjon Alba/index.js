console.log('Hello World');
//ACT 1
// 0 to 50
console.log("Loop 0 to 50");

for (let i = 1; i <= 50; i++){
    console.log(i);
}

// Even
console.log("Even from 0 to 50");

for (let i = 1; i <= 49; i++){
    //Remainder is 0
    if ((i % 2) == 0){
        console.log(i);
    }
}

//Sum of Even
console.log("Sum of Even from 0 to 50");

sumEven = 0;
for (let i = 1; i <= 50; i++){
    if ((i % 2) == 0){
        sumEven = sumEven+i;
    }
}
console.log(sumEven);

//Sum of Odd
console.log("Sum of Odd from 0 to 50");

sumOdd = 0;
for (let i = 1; i <= 50; i++){
    //Remainder Greater than 0
    if ((i%2)>0){
        sumOdd = sumOdd+i;
    }
}
console.log(sumOdd);

// Prime
console.log("Prime from 0 to 50");

for (let i = 1; i <= 50; i++){
    prime = 0;
    //Checks if Number is Divisible by every number below it.
    for (let a = i; a >= 1; a--){
        
        if(i % a == 0){
            prime = prime + 1;
        }
    }

    //Prime would only be Divisible by Itself and 1, Hence prime == 2
    if (prime == 2){
        console.log(i);
    }
}

// ACT 2
// Assign
console.log("Assign Variables And Display");

let first = 85;
let second = 89;
let third = 90;
let fourth = 94;

console.log("The student's first QTR Grade is " + first);
console.log("The student's second QTR Grade is " + second);
console.log("The student's third QTR Grade is " + third);
console.log("The student's fourth QTR Grade is " + fourth);

//Compute Average
console.log("Compute Average");

average = (first + second + third + fourth) / 4;
console.log(average);

//Transmuted Grade
transmute = 0;
if (average >= 93 && average <= 100 ){
    transmute = 1.00;
    console.log("The transmuted grade is: " + transmute + " and the student's status is passed");
} else if (average >= 90 && average < 93 ){
    transmute = 1.25;
    console.log("The transmuted grade is: " + transmute + " and the student's status is passed");
}else if (average >= 87 && average < 90 ){
    transmute = 1.50;
    console.log("The transmuted grade is: " + transmute + " and the student's status is passed");
}else if (average >= 84 && average < 87 ){
    transmute = 1.75;
    console.log("The transmuted grade is: " + transmute + " and the student's status is passed");
}else if (average >= 80 && average < 84 ){
    transmute = 2.00;
    console.log("The transmuted grade is: " + transmute + " and the student's status is passed");
}else if (average >= 75 && average < 80 ){
    transmute = 2.25;
    console.log("The transmuted grade is: " + transmute + " and the student's status is passed");
}else if (average >= 70 && average < 75 ){
    transmute = 2.50;
    console.log("The transmuted grade is: " + transmute + " and the student's status is passed");
}else if (average >= 65 && average < 70 ){
    transmute = 2.75;
    console.log("The transmuted grade is: " + transmute + " and the student's status is passed");
}else if (average >= 60 && average < 65 ){
    transmute = 3.00;
    console.log("The transmuted grade is: " + transmute + " and the student's status is passed");
}else if (average >= 55 && average < 60 ){
    transmute = 4.00;
    console.log("The transmuted grade is: " + transmute + " and the student's status is failed");
}else if (average >= 0 && average < 55 ){
    transmute = 5.00;
    console.log("The transmuted grade is: " + transmute + " and the student's status is failed");
}

//ACT 3
//FIND LONGEST
console.log("Find Longest Word in a String");

sentenceOne = "What is the average airspeed velocity of an unladen swallow";
sentenceTwo = "What if we try a super-long word such as otorhinolaryngology";
function longest(words){
    // Split 
    words = words.split(" ")
    // Return 
    return words.sort((a, b) => b.length - a.length)[0]
}
console.log("Longest word is with " + (longest(sentenceOne)).length + " characters.");
console.log("Longest word is with " + (longest(sentenceTwo)).length + " characters.");

//ACT 4
console.log("Definition of palindrome");
console.log("A word, verse, or sentence (such as 'Able was I ere I saw Elba') or a number (such as 1881) that reads the same backward or forward.");
function reverse( word )
  {
    // HOld
    let invertedWord = "";
    for( let i = word.length-1 ;i >= 0 ;i--)
    {
      invertedWord+= word[i];
    }
    //invert
    return invertedWord;
  }
 
  //Vibe Check
  function palindromeCheck( word )
  {
    revert_word = reverse(word);
    // Check
    if( revert_word === word)
    {
      console.log(word + " is a palindrome ");
    }
    else
    {
      console.log(word + " is not palindrome")
    }
  }
  test = "RACECAR";
  palindromeCheck(test);


//ACT 5
console.log("Number to Word");

var oneToNine = ['Zero','One','Two','Three','Four', 'Five','Six','Seven','Eight','Nine']; 
var tenToNineteen = ['Ten','Eleven','Twelve','Thirteen', 'Fourteen','Fifteen','Sixteen', 'Seventeen','Eighteen','Nineteen']; 
var byTen = ['Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];
var thousands = ['','Thousand','Million', 'Billion'];

function toWords(fromNumbers){

    //Remove ","
    fromNumbers = fromNumbers.replace(/[\, ]/g,''); 

        //Check if Input is Number(string)
        if (fromNumbers != parseFloat(fromNumbers)) return 'Invalid Input';

        //if (length == -1) 
        length = fromNumbers.length;

//console.log(length);

        //Check if Number Length Exceeds 12
        if (length > 12) return 'Big Number Cant Compute';

        var whatNum = fromNumbers.split('');
        var convertedTo = '';
        var onOne = 0;
        
        //Scroll (Check) Through Each Number
        for (var position = 0; position < length; position++) {

//console.log("NumberIndex: " + position);   

            //Check Every 2nd "(3rd)-1" Num position
            //Execute only every 2nd "(3rd)-1" Num Position
            if ((length - position) % 3 == 2) {
                   
                //Check if 2nd Number is 1
                //Print from Array tenToNineteen
                if (whatNum[position] == '1') {
                    convertedTo += tenToNineteen[Number(whatNum[position+1])] + ' ';
                    position++;
                    onOne=1;
//console.log("TenToNineteen Executed");
                
                //Check if 2nd Number is 2-9
                //Print from Array byTen
                }else if (whatNum[position]!=0) {
                    convertedTo += byTen[whatNum[position]-2] + ' ';
                    onOne=1;
//console.log("ByTen Executed"); 
                }
            
            //Check if Number is Not equal to 0
            }else if (whatNum[position]!=0) {

                //Check for Single number
                //Print from Array oneToNine
                convertedTo += oneToNine[whatNum[position]] +' ';
//console.log("OneToNine Executed"); 

                //Check Every 3rd Num position
                //Execute only every 3rd Num Position
                //Print: hundred
                if ((length-position)%3==0) convertedTo += 'Hundred ';
                onOne=1;
//console.log("Add Hundred Executed"); 
            } 

            //Check Every (3rd)+1 Num position
            //Execute only every (3rd)+1 Num Position
            if ((length-position)%3==1) {
                
                //If input is only 0: Print 0
                if (fromNumbers == 0) convertedTo += oneToNine[0];
                
                //Print from Array thousands
                if (onOne) convertedTo += thousands[(length-position-1)/3] + ' ';
                onOne=0;
//console.log("Thousands Executed"); 
            }
        } 
    return convertedTo;    
}
let inputNum1 = toWords("1012");
console.log(inputNum1);
let inputNum2 = toWords("1021101113");
console.log(inputNum2);

