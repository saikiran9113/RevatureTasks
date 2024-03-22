var sum=(a,b)=>(a+b);
var sub=(a,b)=>(a-b);
var mul=(a,b)=>(a*b);
function cal(op){
    
    if(op=='+' || op=='-'|| op=='*'){
        a=parseInt(prompt("Enter the Value1:"))
        b=parseInt(prompt("Enter the Value2:"))
        switch(op){
            case '+':
                console.log(sum(a,b));
                break;
            case '-':
                console.log(sub(a,b));
                break;
            case '*':
                console.log(mul(a,b));
                break;
        }
        
    }
    else {
        console.log("Enter Correct operation");
    }
    
    
}
op=prompt("Enter the operation to perform:")
cal(op)