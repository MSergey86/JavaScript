let arr = document.querySelectorAll('.slider__item');
let len = arr.length;
let array = Array.from(arr);

let prevBtn = document.getElementsByClassName('slider__arrow slider__arrow_prev');
let nextBtn = document.getElementsByClassName('slider__arrow slider__arrow_next');

prevBtn[0].onclick = () => {
    let index = array.findIndex(item => item.className === 'slider__item slider__item_active');
    if (index > 0) {
        arr[index].className = 'slider__item';
        index--;
        arr[index].className = 'slider__item slider__item_active';
    }
}

nextBtn[0].onclick = () => {
    let index = array.findIndex(item => item.className === 'slider__item slider__item_active');
    if (index < len - 1) {
        arr[index].className = 'slider__item';
        index++;
        arr[index].className = 'slider__item slider__item_active';
    }
}
