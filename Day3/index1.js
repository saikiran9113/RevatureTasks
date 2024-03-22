function abc(n){
    for(i=2;i<n;i++){
    b=true
    for(j=2;j<i;j++){
        if(i%j==0){
            b=false
        }
    }
    if(b==true){
        console.log(i);
    }
    }
}
abc(58)