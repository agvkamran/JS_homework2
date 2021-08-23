function commonElements(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if()
                arr3.push(arr1[i]);
            }
        }
    }
    console.log(arr3)
}

function indexOf(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return i;
        }
    }
    return -1;
}

console.log(indexOf([1, 7, 5], -7));

// commonElements([1, 2, 3], [2, 6, 2]);