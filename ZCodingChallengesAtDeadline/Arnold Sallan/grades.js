
function getAverage(gradeOne, gradeTwo,gradeThree,gradeFour){
    //computing the average
    ave = (gradeOne+gradeTwo+gradeThree+gradeFour)/4;

    console.log("the student's first grade is "+ gradeOne);
    
    console.log("the student's second grade is "+ gradeTwo);
    
    console.log("the student's third grade is "+ gradeThree);

    console.log("the student's fourth grade is "+ gradeFour);

    console.log("The average score is " + ave);
    let equivGrade = 0;
    //to validate
    if (ave>100){
        console.log("Invalid average");
    }
   
    else{
        //deter the grade equivalent of the student
        if ((ave>=93)&&(ave<=100)){
            equivGrade = 1.00;
        }
        else if ((ave>=90)&&(ave<93)){
            equivGrade = 1.25;
        }
        else if ((ave>=87)&&(ave<90)){
            equivGrade = 1.50;
        }
        else if ((ave>=84)&&(ave<87)){
            equivGrade = 1.75;
        }
        else if ((ave>=80)&&(ave<84)){
            equivGrade = 2.00;
        }
        else if ((ave>=75)&&(ave<80)){
            equivGrade = 2.25;
        }
        else if ((ave>=70)&&(ave<75)){
            equivGrade = 2.50;
        }
        else if ((ave>=65)&&(ave<70)){
            equivGrade = 2.75;
        }
        else if ((ave>=60)&&(ave<65)){
            equivGrade = 3.00;
        }
        else if ((ave>=55)&&(ave<60)){
            equivGrade = 4.00;
        }
        else{
            equivGrade = 5.00;
        }
        //checks whether the student passed or not.
        if (equivGrade<=3.00){
            console.log ("The transmuted grade is "+ equivGrade.toFixed(2) + " status is passed");
        
        }
        else{
            console.log ("The transmuted grade is "+ equivGrade.toFixed(2) + " status is failed");
        
        }
        
    }
 
}


let first = 85;
let second = 89;
let third = 90;
let fourth = 94;

getAverage(first,second,third,fourth);