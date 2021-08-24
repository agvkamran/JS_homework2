function commonElements(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (indexOf(arr3, arr1[i]) === -1) {
                    arr3.push(arr1[i]);
                }
            }
        }
    }
    return arr3;
}

function indexOf(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return i;
        }
    }
    return -1;
}

console.log(commonElements([1, 1, 1, 1, 2, 3], [2, 4, 6, 3]));