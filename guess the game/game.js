const max =  prompt("Enter the maximum number ");
const random = Math.floor(Math.random()*max)+1;
let guess = prompt("guess the number");
 while (true){
    if ( guess == "guit"){
        console.log("user quite");
        break;
    }
    if(guess == random){
        console.log("congrats !! you gest true");
        break;
    }
    else if (guess <random){
        guess = prompt("hint : the guess number was so small please try again");
    }
    else {
        guess = prompt("hint: the guess number is so largest please try again");
    }
 }