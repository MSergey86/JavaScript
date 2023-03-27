
const main = document.getElementById('modal_main');
const close = document.getElementsByClassName('modal__close modal__close_times');
let closeLen = close.length;
const btnShowSucces = document.getElementsByClassName('btn btn_danger modal__close show-success');
const success = document.getElementById('modal_success');


main.className = 'modal modal_active';

btnShowSucces[0].onclick = () => {
    main.className = 'modal';
    success.className = 'modal modal_active';
}

function closeClicker () {
   for (let i = 0; i < closeLen; i++) {
    close[i].onclick = () => {
        if (close[i].closest('.modal_active').id = 'modal_main') {
            main.className = 'modal';
        }
        if (close[i].closest('.modal_active').id = 'modal_success') {
            success.className = 'modal';
        }
    }
   }
}

closeClicker();

