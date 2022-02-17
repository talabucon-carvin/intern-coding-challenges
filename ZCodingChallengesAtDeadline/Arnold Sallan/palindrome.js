function checkPalindrome(word){
    
    let len = word.length;
    let flag = false;
    let backward = "";
    
    for(let i = len-1; i>=0;i--){
        //populates the variable that will hold the reversed form of the string
        backward+=word[i];
    }
    //detects whether it is a palindrome or not
    if (backward==word){
        flag = true;
        console.log(flag+"- "+"The statement: "+ word + " is a palindrome");
    
    }
    else{

        console.log(flag+"- "+"The statement: "+ word + " is not a palindrome");
        
    }
    
    
    /*console.log(word);
    console.log(backward);*/
}

let word = "Able was I ere I saw Elba";
checkPalindrome(word.toLowerCase());
checkPalindrome("1881");
checkPalindrome("asdasdaksl;dlaskd");