

// calculate execution time
console.time('start');

const numArr = [];
for (let i = 0; i < 9999999 ; i++) {
    numArr.push(i)
}
console.timeEnd('start')

