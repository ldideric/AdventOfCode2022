import * as fs from 'fs';

let splitdata = [], match = [], total = 0;

fs.readFile('input.txt', 'utf8', (err, data) => {
    data = data.split('\n');

    for (let dataindex = 0; dataindex < data.length; dataindex++) {
        for (let three = 0; three < 3; three++) {
            splitdata[dataindex] = 0;
            splitdata[dataindex] += data[dataindex * 3 + three];
        }
    }
    console.log(splitdata);

    // splitdata.forEach((item, i) => {
    //     for (let j = 0; j < item[0].length; j++) {
    //         if (item[1].match(item[0][j])) {
    //             match[i] = item[1].match(item[0][j]);
    //             match[i] = (match[i][0].charCodeAt(0) - ((match[i][0] == String(match[i][0]).toLowerCase()) ? 96 : 38));
    //         }
    //     }
    // });

    // match.forEach(element => {
    //     total += element;
    // });
    // console.log(total);
});
