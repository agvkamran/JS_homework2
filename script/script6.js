function firstRepeat(str) {
    let repeat = true;
    for (let i = 0; i < str.length; i++) {
        for (let k = i + 1; k < str.length; k++) {
            if (str[i] === str[k]) {
                repeat = false;
                console.log(str[i]);

            }
        }
        if (repeat) {
            console.log('no repeat');
        }
    }
}

firstRepeat('legolaaas');
