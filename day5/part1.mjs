import * as fs from 'fs';

const regexpression = /(?<amount>[0-9]+)\sfrom\s(?<from>[0-9]+)\sto\s(?<to>[0-9]+)/gm;

let stacks = [
    ['R', 'G', 'H', 'Q', 'S', 'B', 'T', 'N'],
    ['H', 'S', 'F', 'D', 'P', 'Z', 'J'],
    ['Z', 'H', 'V'],
    ['M', 'Z', 'J', 'F', 'G', 'H'],
    ['T', 'Z', 'C', 'D', 'L', 'M', 'S', 'R'],
    ['M', 'T', 'W', 'V', 'H', 'Z', 'J'],
    ['T', 'F', 'P', 'L', 'Z'],
    ['Q', 'V', 'W', 'S'],
    ['W', 'H', 'L', 'M', 'T', 'D', 'N', 'C']
];

// let stacks = [
//     ['1a', '1b', '1c'],
//     ['2a', '2b', '2c'],
//     ['3a', '3b', '3c', '3d']
// ];

let splitData = [], regexMatches = [];

function moveItemsRow(fromDex, toDex, amount) {
    let movingItems = [];
    for (let i = 0; i < amount; i++) {
        movingItems[i] = stacks[fromDex][stacks[fromDex].length - 1];
        stacks[fromDex].pop();
    }
    let curLength = stacks[toDex].length - 1;
    movingItems.forEach((item, index) => {
        stacks[toDex][curLength + amount - index] = item;
    });
}

fs.readFile('./input.txt', 'utf8', (err, rawData) => {
    rawData = rawData.split('\n');

    rawData.forEach((string, i) => {
        splitData[i] = string.replace('\r', '');
        for (const match of splitData[i].matchAll(regexpression)) {
            regexMatches[i] = {...match.groups};
            regexMatches[i].from--;
            regexMatches[i].to--;
        }
    });
    console.log('before:');
    console.table(stacks);

    regexMatches.forEach(instruction => {
        moveItemsRow(instruction.from, instruction.to, Number(instruction.amount));
        // console.table(stacks);
    });
    console.log('after:');
    console.table(stacks);

    let result = '';
    stacks.forEach((stack, index) => {
        result += stack[stack.length - 1];
    });
    console.log(result);
});
