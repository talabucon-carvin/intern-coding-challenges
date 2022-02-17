
function displayNumbers(){
    console.log("These are numbers from 0 - 50")
    for (let i = 0; i<=50;i++){
      console.log(i);
    }
}
function displayEven(){
    console.log("These are even numbers from 0 - 50")
    for (let i = 0; i<=50;i++){
      if (i%2==0){
        console.log(i);
      }
    }
    
}
function displaySum(){

    let resultEven = 0;
    let resultOdd = 0;
    for (let i = 0; i<=50;i++){
        //deters whether the iteration is an odd or even number
      if (i%2==0){
        resultEven+=i;
      }
      else{
        resultOdd += i;
      }
    }
    console.log("The sum of all even numbers is: "+ resultEven);
    console.log("The sum of all odd numbers is: "+ resultOdd);


}

function displayPrime(){

    let result = 0;

    for (let i = 0; i<50;i++){
        let ctr =0;
        for (let x = i; x>0; x--){
            if (i%x==0){
                ctr++;
                //checks the number of times when the numbeer was divisible (prime numbers are only divisible by itself and 1)
            }
        }
        //must not exceed to two 
        if(ctr == 2){
            //adds up all the iterations detected
            result+=i;   
        }
      
        
    }   
    console.log("The sum of all prime numbers from 0-50: " + result);

}
displayNumbers();
displayEven();
displaySum();
displayPrime();