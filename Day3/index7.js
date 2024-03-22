const randomNumber = Math.floor(Math.random() * 100)+1;
let a=prompt("Guess the number:")
if(a==randomNumber){
    console.log(`Congratulations!! You Guessed Correct Number ${a}`);
}
else{
while(a!=randomNumber){
    if(a>randomNumber){
        console.log("Lesser than this Number");
        a=prompt("Guess:");
    }
    else if(a<randomNumber){
        console.log("Greater than this number");
        a=prompt("Guess:");
    }
    }
    if(a==randomNumber){
    console.log(`Congratulations!! You Have Guessed the Correct Number ${a}`);
}
}