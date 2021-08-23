function arrayOfMultiples(num, str) {
    let arr = [];
    for (let i = 1; i <= str; i++) {
        arr.push(num * i);
    }
    console.log(arr);
}

arrayOfMultiples(7, 5)