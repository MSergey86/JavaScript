
const main = document.getElementById('modal_main');
const close = document.getElementsByClassName('modal__close modal__close_times');
const btnShowSucces = document.getElementsByClassName('btn btn_danger modal__close show-success');
const success = document.getElementById('modal_success');


main.className = 'modal modal_active';

close[0].onclick = () => {
    main.className = 'modal';
}
close[1].onclick = () => {
    success.className = 'modal';
}

btnShowSucces[0].onclick = () => {
    main.className = 'modal';
    success.className = 'modal modal_active';
}

