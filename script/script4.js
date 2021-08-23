function findCoords(a1, a2) {
    console.log(Math.sqrt(Math.pow((a1.x - a2.x), 2) + Math.pow((a1.y - a2.y), 2)));
}

findCoords({ x: 1, y: 1 }, { x: 4, y: 5 });