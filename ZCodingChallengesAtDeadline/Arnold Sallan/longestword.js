function getLongestWord(word){
    let len = word.length;
    let ctr = 0;
    let high = 0;
    //iterates characters of the string
    for (let i = 1;i<len;i++){
        if(word[i]!=" "){
            ctr++;
            if(ctr>high){
                high = ctr;
                //switches the highest when ctr(counter variable) exceeds the current specified highest
            }
        }
        else{
            ctr = 0;
        }

    }

    console.log("Longest word is with " + high + " characters");
}

let word = "What is the average airspeed of an unladen swallow";
let word_two = "What if we try a super-long word such as otorhinolaryngology";

getLongestWord(word);
getLongestWord(word_two);