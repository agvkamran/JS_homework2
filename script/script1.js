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
        console.log(arr);
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
        console.log(arr);
    }
    else {
        console.log(arr);
    }
}

getArray([3, 1, 69, 51], 'Asc');


