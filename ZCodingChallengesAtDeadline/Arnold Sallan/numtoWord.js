//array with elements as the conversions to correspond to each of the numbers
var th = ['hundred','thousand',"hundred thousand",];

let ones = ['','one','two','three','four',
'five','six','seven','eight','nine'];
let tens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
'seventeen','eighteen','nineteen'];

let abovt = ["","",'twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];


    
function numToWord(numer){
    let i = 0;
    let digits =[];
    while (numer>0){
        digits[i] = numer%10;
        numer = Math.floor(numer/10);

        i++;
    }
    
        
    //console.log(digits.length);
    //handles less than 3 digits
    if (digits.length<3){
        if (digits[1]==1){
           console.log(tens[digits[0]]);
        }
        else{
            console.log(ones[digits[0]]);
        }
    }


    else{
        //handles 3 digits
        if (digits.length==3){
            
            if (digits[1]==1){
                console.log(ones[digits[2]]+ " "+ th[0]+ " "+ tens[digits[0]]);
            }
            else{
                console.log(ones[digits[2]]+ " "+ th[0]+ " "+ abovt[digits[1]] + " "+ ones[digits[0]]);
            }

        }
        //handles 4 digits
        else if (digits.length==4){
            if ((digits[1]==1)&&(digits[2]!=0)){
                console.log(ones[digits[3]]+" "+th[1]+" "+ ones[digits[2]]+ " "+ th[0]+ " "+ tens[digits[0]]);
            }
            else if ((digits[1]==1)&&(digits[2]==0)){
                console.log(ones[digits[3]]+" "+th[1]+" "+ ones[digits[2]] +" "+ tens[digits[0]]);
            }
            else if (digits[2]==0){
                console.log(ones[digits[3]]+" "+th[1]+" "+ abovt[digits[1]] + " "+ ones[digits[0]]);
            }
            else{
                console.log(ones[digits[3]]+" "+th[1]+" "+ones[digits[2]]+" "+th[0]+" "+ abovt[digits[1]] + " "+ ones[digits[0]]);
            }
        }
        //handles 5 digit numbers
        else if (digits.length==5){
            if ((digits[1]==1)&&(digits[2]!=0)&&(digits[4]==1)){
                console.log(tens[digits[3]]+" "+th[1]+" "+ ones[digits[2]]+ " "+ th[0]+ " "+ tens[digits[0]]);
            }
            else if ((digits[4]==1)&&(digits[1]==1)&&(digits[2]==0)){
                console.log(tens[digits[3]]+" "+th[1]+" "+ ones[digits[2]] +" "+ tens[digits[0]]);
            }
            else if ((digits[4]!=1)&&(digits[1]==1)&&(digits[2]==0)){
                console.log(abovt[digits[4]]+" "+ones[digits[3]]+" "+th[1]+" "+ ones[digits[2]] +" "+ tens[digits[0]]);
            }
            else if ((digits[4]!=1)&&(digits[2]==0)){
                console.log(abovt[digits[4]]+" "+ones[digits[3]]+" "+th[1]+" "+ abovt[digits[1]] +" "+ ones[digits[0]]);
            }
            else if ((digits[4]!=1)&&(digits[1]==1)){

                console.log(abovt[digits[4]]+" "+ones[digits[3]]+" "+th[1]+" "+ ones[digits[2]]+ " " +th[0] + " " +tens[digits[0]]);
            }
            else{
                console.log(abovt[digits[4]]+" "+ones[digits[3]]+" "+th[1]+" "+ ones[digits[2]]+ " " +th[0] + " " +abovt[digits[1]] +" "+ ones[digits[0]]);
            }
            
        }
        //handles 6 digit numbers
        else if (digits.length==6){
            if ((digits[1]==1)&&(digits[2]!=0)&&(digits[4]==1)){
                console.log(ones[digits[5]]+" "+th[0]+" "+tens[digits[3]]+" "+th[1]+" "+ones[digits[2]]+" "+th[0]+" "+ tens[digits[0]]);
            }
         
            else if ((digits[4]==1)&&(digits[1]==1)){
                console.log(ones[digits[5]]+" "+th[0]+" "+tens[digits[3]]+" "+th[1]+" "+abovt[digits[2]]+" "+th[0]+" "+tens[digits[0]]);
            }
            else if(digits[4]==1){
                console.log(ones[digits[5]]+" "+th[0]+" "+tens[digits[3]]+" "+th[1]+" "+abovt[digits[2]]+" "+th[0]+" "+abovt[digits[1]]+" "+ones[digits[0]]);
            }

         
            else{
                console.log(ones[digits[5]]+" "+th[0]+" "+abovt[digits[4]]+" "+ones[digits[3]]+" "+th[1]+" "+ones[digits[2]]+" "+th[0]+" "+abovt[digits[1]] +" "+ones[digits[0]]);
            }
        }
     
     
     
    }
    

}

let given = 1012;
let given_two = 999999;
console.log("For given: "+ given);

numToWord(given);
console.log("For given: "+ given_two);
numToWord (given_two);
/*numToWord(2);
numToWord(12);
numToWord(125);
numToWord(1112);
numToWord(1012);
numToWord(1032);
numToWord(1252);
numToWord(2305);
numToWord(12315);
numToWord(12015);
numToWord(22015);
numToWord(22035);
numToWord(22005);
numToWord(99315);
numToWord(99999);
numToWord(111115);
numToWord(211115);
numToWord(211135);
numToWord(999999);
numToWord(998999);
numToWord(918919);
numToWord(918929);
/*console.log(given);
console.log(given%10);
*/