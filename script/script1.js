function getArray(arr, str) {
    if (str === 'Asc') {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let x = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = x;
                }
            }
        }
        return arr;
    }
    else if (str === 'Desc') {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    let x = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = x;
                }
            }
        }
        return arr;
    }
    else {
        return arr;
    }
}

console.log(getArray([3, 1, 69, 51], 'Desc'));


