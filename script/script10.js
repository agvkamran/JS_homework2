function f1(start, end) {
    let arr = [];
    if (start < end) {
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
    }
    else{
        for (let i = start; i >= end; i--) {
            arr.push(i);
        }
    }
    console.log(arr);
}

f1(123,112);

