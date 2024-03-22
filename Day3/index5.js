n=parseInt(prompt("Enter the year:"))
if((n%400==0 && n%100==0)|| n%4==0 ){
    console.log("Leap Year")
}
else{
    console.log("Not a leap year")
}