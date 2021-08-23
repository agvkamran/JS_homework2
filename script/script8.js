function f1(num){
    return function(arr){
       for(let i = 0; i < arr.length; i++){
           return arr[i] / num;
       }
    }
}


let closureMainFunc = f1(9);

closureMainFunc([9, 18, 27]);


