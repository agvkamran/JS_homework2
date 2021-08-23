function rps(str) {
    let arr = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random() * arr.length);
    if (str === 'Rock' && arr[rand] === 'Scissors') {
        console.log(str, arr[rand]);
        console.log(`“Player selected ${str}. CPU selected ${arr[rand]}. Player won”`);
    }
    else if (str === 'Rock' && arr[rand] === 'Paper') {
        console.log(str, arr[rand]);
        console.log(`“Player selected ${str}. CPU selected ${arr[rand]}. CPU won”`);
    }
    else if (str === 'Paper' && arr[rand] === 'Scissors') {
        console.log(str, arr[rand]);
        console.log(`“Player selected ${str}. CPU selected ${arr[rand]}. CPU won”`);
    }
    else if (str === 'Paper' && arr[rand] === 'Rock') {
        console.log(str, arr[rand]);
        console.log(`“Player selected ${str}. CPU selected ${arr[rand]}. Player won”`);
    }
    else if (str === 'Scissors' && arr[rand] === 'Rock') {
        console.log(str, arr[rand]);
        console.log(`“Player selected ${str}. CPU selected ${arr[rand]}. CPU won”`);
    }
    else if (str === 'Scissors' && arr[rand] === 'Paper') {
        console.log(str, arr[rand]);
        console.log(`“Player selected ${str}. CPU selected ${arr[rand]}. Player won”`);
    }
    else {
        console.log(str, arr[rand]);
        console.log(`Player and CPU both selected Paper. Friendship won`);
    }
}

rps('Paper');