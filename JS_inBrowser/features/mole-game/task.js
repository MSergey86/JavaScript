let countDead = document.getElementById('dead');
let countLost = document.getElementById('lost');

let arr= document.querySelectorAll('.hole'); // создает массив всех элементов с '.holle' в css

const a = arr.length;

function clicker() {
    for (let i = 0; i < a; i++) {
        arr[i].onclick = () => {
            if (arr[i].className == 'hole hole_has-mole') {
                countDead.textContent = Number(countDead.textContent) + 1;
                result(countDead.textContent, countLost.textContent);
            }
            else {
                countLost.textContent = Number(countLost.textContent) + 1;
                result(countDead.textContent, countLost.textContent);
            } 
        }
    }
    setTimeout(clicker, 1); // ещё раз, через миллисекунду
  }
  
  clicker();

  function result (dead, lost) {
    if (dead > 9) {
        alert('Вы выиграли! Убито ' + countDead.textContent + ' кротов');
        countDead.textContent = 0;
        countLost.textContent = 0;
    }
    if (lost > 4) {
        alert('Вы проиграли! ' + countLost.textContent + ' промахов');
        countDead.textContent = 0;
        countLost.textContent = 0;
    }

  }
