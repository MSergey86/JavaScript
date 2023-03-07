
let arr = [];

function primeNum (n) {
    let count = 0;
    let i = 2;
    while (count < n) {
        let bul = false;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
              bul = true;
            }
        }
        if ((bul == false) && (!arr.includes(i))) {
            arr.push(i);
            count++;
        }
        i++;
    }
    console.log(arr)
}
console.time()
console.log(primeNum(process.argv[2]))
console.timeEnd()
