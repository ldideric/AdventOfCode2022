import * as fs from 'fs';

fs.readFile('input.txt', 'utf8', (err, data) => {
    let food = data.split('\n');
    let elves = [];

    let tmp = 0, ei = 0;
    for (let i = 0; i < food.length; i++) {
        if (Number(food[i]) != '\r' && Number(food[i]) != '\0' && Number(food[i]) != '\n') {
            tmp += Number(food[i]);
        }
        if (food[i] == '\r') {
            elves[ei] = tmp;
            ei++;
            tmp = 0;
        }
    }
    let highest = 0;
    elves.forEach(element => {
        highest = (highest > element) ? highest : element;
    });
    console.log(highest);
});
