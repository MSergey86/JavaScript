const rl = require('readline').createInterface(process.stdin, process.stdout);

let random = Math.floor(Math.random() * 1000);

function question (quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (number) => {
        resolve(number);
        })
    })
}

async function input() {
    let count = 1;
    while (true) {
        console.log('Попытка №: ', count);
        const number = await question('Введите цифру от 0 до 1000 ');
        console.log('Вы ввели ', number);
        if (number == 'quit') {
            rl.close();
            console.log('Игра завершена, количесвто попыток: ', count-1);
            break;
        }
        else if (isNaN(number)) {
            console.log("Вы должны ввести чило")
        }
        else if (+number > 1000 || number < 0 ){
            console.log("Вы должны ввести число от 0 до 1000")
        }
        else if (+number < random) {
            console.log("Заданное число больше введенного")
        }
        else if (+number > random) {
            console.log("Заданное чило меньше введенного")
        }
        else {
            console.log("Вы угадали!!!");
            console.log('Количество попыток: ', count);
            rl.close();
            break;
        }
        count++;
    }
}

input();
