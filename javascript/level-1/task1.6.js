function arrayLength(arr){
    let base = '';
    
    arr.map(function(str){
        if(str.length >= base.length){
            base = str;
        }
        })
        return base + str
        }
        
    

 
console.log(arrayLength(['we', 'are', 'wild',"song"])) 