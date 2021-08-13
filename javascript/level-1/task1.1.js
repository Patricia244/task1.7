
 
 function multiplesof3And5(num){
        var sum = 0;
        for (var i = 1 ; i < num; i++){
        if(!(i % 3)|| !(i % 5)){
            sum += i
        }
    }
    return sum
}


console.log(multiplesof3And5(1000));