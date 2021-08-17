function mergeTwoArrays(arr1,arr2){
var arr1 = [11,22,33];
var arr2 =[1,2,3]

        for(i= 0; i <6;i++){
            if ( arr1.length === arr2.length){
                var result =[];
            result.push(arr1[i],arr2[i])
        }
        return result
    }

}
console.log(mergeTwoArrays([11,22,33],[1,2,30]))
