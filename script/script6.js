function firstRepeat(str) {
    for (let i = 0; i < str.length; i++) {
        for (let k = i - 1; k >= 0; k--) {
            if (str[i] === str[k]) {
                return str[i];
            }
        }
    }
    return -1;
}

console.log(firstRepeat('legolas'));
