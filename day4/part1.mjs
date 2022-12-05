import * as fs from 'fs';

function RangeToInt(range) {
    range = range.split('-');
    range = [Number(range[0]), Number(range[1])];
    return range;
}

function containsRange(rangeOne, rangeTwo) {
    return ((rangeOne[0] <= rangeTwo[0] && rangeOne[1] >= rangeTwo[1])
        || (rangeOne[0] >= rangeTwo[0] && rangeOne[1] <= rangeTwo[1]));
}

let splitData = [], total = 0;


fs.readFile('input.txt', 'utf8', (err, rawData) => {
    rawData = rawData.split('\n');
    rawData.forEach((string, i) => {
        splitData[i] = string.replace('\r', '').split(',');
    });

    splitData.forEach(ranges => {
        ranges = [RangeToInt(ranges[0]), RangeToInt(ranges[1])];
        total += ((containsRange(ranges[0], ranges[1])) ? 1 : 0);
    });

    console.log(total);
});
