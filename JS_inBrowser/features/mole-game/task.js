let countDead = document.getElementById('dead');
let countLost = document.getElementById('lost');
let hole1 = document.getElementById('hole1');
let hole2 = document.getElementById('hole2');
let hole3 = document.getElementById('hole3');
let hole4 = document.getElementById('hole4');
let hole5 = document.getElementById('hole5');
let hole6 = document.getElementById('hole6');
let hole7 = document.getElementById('hole7');
let hole8 = document.getElementById('hole8');
let hole9 = document.getElementById('hole9');

const arr = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9,];

const a = arr.length;

function clicker() {
    for (let i = 0; i < a; i++) {
        arr[i].onclick = () => {
            if (arr[i].className == 'hole hole_has-mole') {
                countDead.textContent = Number(countDead.textContent) + 1;
                if (countDead.textContent > 9) {
                    alert('Вы выиграли! Убито ' + countDead.textContent + ' кротов');
                    countDead.textContent = 0;
                    countLost.textContent = 0;
                }
            }
            else {
                countLost.textContent = Number(countLost.textContent) + 1;
                if (countLost.textContent > 4) {
                    alert('Вы проиграли! ' + countLost.textContent + ' промахов');
                    countDead.textContent = 0;
                    countLost.textContent = 0;
                }
            } 
        }
    }
    setTimeout(clicker, 1); // ещё раз, через миллисекунду
  }
  
  clicker();

