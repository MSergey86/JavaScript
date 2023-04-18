
const span = document.querySelector('span').children;
const spanQty = span.length;


let arr = Array.from(span);
   arr.forEach(element => {                         
    let color = element.getAttribute('data-color');
    element.style.color = color;
})


let speed = 1000;

let timerId = setTimeout(function repeat() {
    for (let i = 0; i < spanQty; i++) {
        if (span[i].classList.contains('rotator__case_active')) {
            span[i].classList.toggle('rotator__case_active');
            if (i < (spanQty - 1)) {
                span[i + 1].classList.toggle('rotator__case_active');
            }
            else {
                span[0].classList.toggle('rotator__case_active');
            }
            speed = span[i].getAttribute('data-speed');
            // console.log(speed);
            break;
        }
    }
    timerId = setTimeout(repeat, speed);
}, speed)
