// Question-1
const arr = [1, 2, 3, 4, 5, 6];
a=false
for(i=0;i<arr.length;i++)
{
    if(arr[i]==2){
        console.log(i);
        a=true
        break;
    }
}
if(a=false){
    console.log("Element not found in array")
}

//Question-2
const fruits = ["banana", "mango", "apple", "kiwi"];
fruits.splice(2,1);
console.log(fruits)

//Question-3
const numbers = [23, 45, 12, 67, 89, 34];
numbers.reverse();
console.log(numbers);

//Question-4
const number = [23, 45, 12, 67, 89, 34];
a=Math.max(...number);
console.log(a);

//Question-5
const numbe = [10, 5, 8, 20, 15, 12];
numbers.sort(function(a, b){return a - b});
console.log(numbe);


//Question-6
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sum=0
for(i of numb){
    if(i%2==0){
        sum+=i;
    }
}
console.log(sum);

//Question-7
students = [];
student1 = { name: "Veera", age: 22 };
student2 = { name: "Tharun", age: 22 };
student3 = { name: "Ramesh", age: 21 };
students.push(student1, student2, student3);
console.log(students);