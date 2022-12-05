import * as fs from 'fs';

function split(str, index) {
    return [str.slice(0, index), str.slice(index)];
}

let splitdata = [], match = [], total = 0;
fs.readFile('input.txt', 'utf8', (err, data) => {
    data = data.split('\n');
    data.forEach((item, i) => { splitdata[i] = split(item.replace('\r', ''), item.length / 2); });
    splitdata.forEach((item, i) => {
        for (let j = 0; j < item[0].length; j++) {
            if (item[1].match(item[0][j])) {
                match[i] = item[1].match(item[0][j]);
                match[i] = (match[i][0].charCodeAt(0) - ((match[i][0] == String(match[i][0]).toLowerCase()) ? 96 : 38));
            }
        }
    });
    match.forEach(element => {
        total += element;
    });
    console.log(total);
});
