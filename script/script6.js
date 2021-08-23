function firstRepeat(str){
    let repeat = true;
    for(let i = 0; i < str.length; i++){
        for(let k = i + 1; k < str.length; k++){
           if(str[i] === str[k]){
                repeat = false;
           }
        }
        if (repeat) {
            console.log('repeat');
       }
    }
}

firstRepeat('gola');