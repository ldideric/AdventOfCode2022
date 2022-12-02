import * as fs from 'fs';

const extra = {'X': 1, 'Y': 2, 'Z': 3};
function won(fst, snd) {
    let X = (fst == 'A') ? 3 : (fst == 'B') ? 0 : 6;
    let Y = (fst == 'A') ? 6 : (fst == 'B') ? 3 : 0;
    let Z = (fst == 'A') ? 0 : (fst == 'B') ? 6 : 3;
    return (snd == 'X') ? X : (snd == 'Y') ? Y : Z;
}

fs.readFile('input.txt', 'utf8', (err, data) => {
    let newdata = data.split('\n');
    let score = 0;
    newdata.forEach(item => {
        let fst = item[0];
        let snd = item[2];
        score += won(fst, snd) + extra[snd];
    });
    console.log('total:', score);
});
