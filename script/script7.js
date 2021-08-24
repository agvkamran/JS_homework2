function numberOfFibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return numberOfFibonacci(num - 1) + numberOfFibonacci(num - 2);
    }
}

console.log(numberOfFibonacci(11));