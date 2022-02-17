
function displayNumbers() {
    let max_numbers = 50;
    let sum_even = 0;
    let sum_odd = 0;

    for (var count = 0; count <= max_numbers; count++) {
        if (count % 2 == 0) { //getting the even numbers from 0 - 50
            console.log(count);
            sum_even += count;  //icrementing all the even numbers then adding them to get the total sum
        }
        else {
            sum_odd += count; //icrementing all the odd numbers then adding them to get the total sum
        }
    }

    console.log(sum_even);
    console.log(sum_odd);
    console.log("Prime Numbers!")

    //PRIME NUMBERS
    for (let prime = 2; prime <= 50; prime++) {
        if (prime % 2 != 0 && prime % 3 != 0 && prime % 5 != 0 && prime % 7 != 0)
            console.log(prime);
        else if (prime == 2 || prime == 3 || prime == 5 || prime == 7) {
            console.log(prime);
        }

    }
}

function displayAverage() {
    //variables for all the grades per quarter
    let first = 85;
    let second = 89;
    let third = 90;
    let fourth = 94;
    let average_score = (first + second + third + fourth) / 4 //variable that holds the average score

    //Printing the scores for all quarters
    console.log("the student's first qtr grade is " + first);
    console.log("the student's second qtr grade is " + second);
    console.log("the student's third qtr grade is " + third);
    console.log("the student's fourth qtr grade is " + fourth);
    console.log("the average score is " + average_score);


    //Condition statements to check if the score reached a requirement to determine if the student passed or failed
    if (average_score < 50) {
        console.log("the transmuted grade is: 5.00 the student's status is failed");
    } else if (average_score >= 55 && average_score < 60) {
        console.log("the transmuted grade is: 4.00 the student's status is failed");
    } else if (average_score >= 60 && average_score < 65) {
        console.log("the transmuted grade is: 3.00 the student's status is passed");
    } else if (average_score >= 65 && average_score < 70) {
        console.log("the transmuted grade is: 2.75 the student's status is passed");
    } else if (average_score >= 70 && average_score < 75) {
        console.log("the transmuted grade is: 2.50 the student's status is passed");
    } else if (average_score >= 75 && average_score < 80) {
        console.log("the transmuted grade is: 2.25 the student's status is passed");
    } else if (average_score >= 80 && average_score < 84) {
        console.log("the transmuted grade is: 2.00 the student's status is passed");
    } else if (average_score >= 84 && average_score < 87) {
        console.log("the transmuted grade is: 1.75 the student's status is passed");
    } else if (average_score >= 87 && average_score < 90) {
        console.log("the transmuted grade is: 1.50 the student's status is passed");
    } else if (average_score >= 90 && average_score < 93) {
        console.log("the transmuted grade is: 1.25 the student's status is passed");
    } else if (average_score >= 93 && average_score <= 100) {
        console.log("the transmuted grade is: 1.00 the student's status is passed");
    }

}

function longestWordInString(str_word) {
    var split_word = str_word.split(' '); //split method is used to split a string into an array format
    var longest_word = ""; //variable where the longest word will be stored
    var length_word = 0; //where the index number of the longest word will be stored

    //for loop that will loop over the elements of the array

    for (var count = 0; count < split_word.length; count++) {
        if (split_word[count].length > length_word) { //condition that checks if the current word is longer than the previous word in the array
            length_word = split_word[count].length;
            longest_word = split_word[count];
        }
    }
    console.log(split_word.join(' ')); //join method is used to combine array elements into one 
    console.log("Longest word is " + longest_word + " with " + length_word + " characters.");



}

//Palindrome function

function palindrome(string_word) {
    let word = string_word.toLowerCase().split(''); //to lowercase method converts all the letters into lower case and split method used to split sentences or phrases into an array
    let reverse_word = word.reverse().join(''); //reverse is used to reverse the items inside an array while join combines the array into one

    //Condition to check if the  given word or number is equivalent to its reverse form
    //Remember when a given word or number is equal to its reverse form it means that it is a palindrome and if its not equivalent then its not a palindrome
    if (string_word.toLowerCase() == reverse_word) {
        console.log(true);
        console.log("The reverse of " + string_word + " is " + reverse_word + " which is a palindrome")
    } else {
        console.log(false);
        console.log("The reverse of " + string_word + " is " + reverse_word + " which is not a palindrome")
    }
}
function numberToWord(number) {


    var millions = Math.floor((number % 10000000 / 1000000)); //variable to get the millions place
    var hundredThousands = Math.floor((number % 1000000 / 100000)); // variable to get the hundreds thousands place
    var tenThousands = Math.floor((number % 100000 / 10000)); // variable to get the tenthousands place
    var thousands = Math.floor((number % 10000 / 1000)); // variable to get the thousands place
    var hundreds = Math.floor((number / 100 % 10)); // variable to get the hundreds place
    var tens = Math.floor(number / 10 % 10); //variable to get the tens place
    var ones = Math.floor(number % 10); //variable to get the ones place
    var tenPlusThousands = Math.floor((number % 100000 / 1000)); //variable that gets the tenthousands and thousands place
    var tenPlus = Math.floor(number % 100) // variable that gets the tens and ones place


    var other_units = ["million ", "thousand ", "hundred "] // units such us million, thousand, hundred

    var ones_array = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', //array that contains words from one to nineteen 
        'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ',
        'seventeen ', 'eighteen ', 'nineteen '];


    var tens_array = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ',
        'ninety '];  //array for twenty up to ninety

    var word = "";

    //condition to check the place values for the example number given
    if (millions) {
        word += ones_array[millions] + other_units[0];
    }
    if (hundredThousands) {
        word += ones_array[hundredThousands] + other_units[2];

        if (tenThousands == 0 && thousands == 0) {  //incase that the number given has a place value of hundred thousands but the value of ten thousands and thousands is 0
            word += other_units[1];                // if the tenthousand and thousand value is equal to 0 then the program will add the word "thousand" right after
        }                                           //the hundred thousands place is shown
    }
    if (tenThousands == 1) {
        word += ones_array[tenPlusThousands] + other_units[1];  //since there are 10 up to 19 the condition here is that if the tenthousands value is equal to 1 then 
        // it will now increment the tenplusthousands variable into the word variable since the tenplusthousands variable determins if the value is from 10-19

    } else {
        word += tens_array[tenThousands];
        if (thousands) {
            word += ones_array[thousands] + other_units[1];
        }else{
            word += other_units[1];
        }
    } if (hundreds) {
        word += ones_array[hundreds] + other_units[2];
    }

    if (tens !== 1) { // if the value of the tens place is not equal to 1 it means that its value ranges from 20-99
        word += tens_array[tens]  //it will increment the value of the tens place based from the tens array
        if (ones) {
            word += ones_array[ones]; // if there is a value for the ones place then it will just increment the value of the ones place based from the given example and one's array
        }
    }
    else {                                  //if the tens place is equal to 1 then it will just increment the value of the tens place that ranges from 10-19 based on ones_array
        if (tenPlus)
            word += ones_array[tenPlus];
    }
    console.log(word) //prints the number to word
}
console.log("-------ACTIVITY 1 -------")
console.log(displayNumbers());
console.log("-------ACTIVITY 2 -------")
console.log(displayAverage());
console.log("-------ACTIVITY 3 -------")
console.log(longestWordInString("What is the average airspeed velocity of an unladen swallow"));
console.log(longestWordInString("What if we try a super-long word such as otorhinolaryngology"));
console.log("-------ACTIVITY 4 -------")
console.log(palindrome("Able was I ere I saw Elba"));
console.log("-------ACTIVITY 5 -------")
console.log(numberToWord(9999999));