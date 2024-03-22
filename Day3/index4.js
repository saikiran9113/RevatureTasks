n=parseInt(prompt("Enter the marks:"))
if(n>=0 && n<=100){
    if(n>=90){
        console.log("A Grade");
    }
    else if(n>=80 && n<=89){
        console.log("B Grade");
    }
    else if(n>=70 && n<=79){
        console.log("C Grade");
    }
    else if(n>=60 && n<=69){
        console.log("D Grade");
    }
    else{
        console.log("F");
    }
}
else{
    console.log("Enter the marks between 0 and 100");
}