//print the location of "my" in a string "I am enjoying my training".

var str="I am enjoying my training";
console.log(str.indexOf("my"));

//print the location of "m" in a string "I am enjoying my training".
console.log(str.indexOf('m'));

//extract the complete string from index 3 of the string "I am enjoying my training". and store in a variable
c=str.slice(3);
console.log(c);

//extract string from index 0 to 4 from the string "I am enjoying my training". and store in a variable.
d=str.slice(0,4);
console.log(d);

//6. replace "training" with "journey" in "I am enjoying my training". and store in a variable.
c=str.replace("training","journey");
console.log(c);

//Print all the characters of a string using for loop. can use charAt() or str[];
for(i in str){
    console.log(str.charAt(i));
}

//store string str="a,b,c" into an array.
str1="a,b,c"
arr=[...str1]
console.log(arr);

 //remove white spaces from the string str="abc     ".
str2 = 'abc     ';
console.log(str2.replace(" ",''));

//Add two strings using the concat() function. and print them. make sure there is space between concatenated elements.
a=prompt("Enter string1:");
b=prompt("Enter string2:");
console.log(a.concat(" ",b));

//Remove 'e' from the following string: ```javascript const str = "abcedgedcve"; ```
const str3 = "abcedgedcve"
console.log(str3.replaceAll('e',''));


 
//Convert the following string into an array: ```javascript const str = "Hello there I am jack"; ```
const str4 = "Hello there I am jack";
arr=[...str4];
console.log(arr);
 
//Check if the given string is a palindrome or not: ```javascript const str = "racecar";
const str5 = "racecar";
revstr=str5.split("").reverse();
if(revstr.join("")==str5){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}

//Check if a string starts with a specific substring: ```javascript const str = "Hello, World!"; const substr = "Hello";
const str6 = "Hello, World!"; 
const substr = "Hello";
console.log(str6.includes(substr));