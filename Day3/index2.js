a=7
b=true
for(i=2;i<a;i++){
    if(a%i==0){
        b=false
        break
    }
}
if(b==false){
    console.log("Not a Prime");
}
else{
    console.log("prime");
}