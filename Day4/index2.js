const Student={
    Name:"",
    Age:0,
    Grade:"",
    Display :function(){
        console.log("Student Details are:");
        console.log(`Name : ${this.Name}`);
        console.log(`Age  : ${this.Age}`);
        console.log(`Grade : ${this.Grade}`);

    }
}
Student.Name=prompt("Enter your name:");
Student.Age=parseInt(prompt("Enter your age:"));
Student.Grade=prompt("Grade is:");
Student.Display();
