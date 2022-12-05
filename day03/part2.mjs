import * as fs from 'fs';

function isLowerCase(char) {
    return (char == String(char).toLowerCase());
}

let splitData = [], splitIndex = 0, matchedCharVal = [], total = 0;

fs.readFile('input.txt', 'utf8', (err, rawData) => {
    rawData = rawData.split('\n');
    rawData.forEach((string, index) => {
        rawData[index] = string.replace('\r', '');
    });

    for (let dataIndex = 0; dataIndex < rawData.length; splitIndex++) {
        for (let three = 0; three < 3; three++, dataIndex++) {
            splitData[splitIndex] = splitData[splitIndex] || [];
            splitData[splitIndex][three] = rawData[dataIndex];
        }
    }

    splitData.forEach(([matchingString, str1, str2]) => {
        for (let i = 0; i < matchingString.length; i++) {
            if (str1.match(matchingString[i]) && str2.match(matchingString[i])) {
                matchedCharVal[matchedCharVal.length] =
                    (matchingString[i].charCodeAt(0) - ((isLowerCase(matchingString[i])) ? 96 : 38));
                break;
            }
        }
    });

    matchedCharVal.forEach(value => { total += value; });
    console.log(total);
});
