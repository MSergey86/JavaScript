const reveal = document.getElementsByClassName('reveal');
console.log(reveal[0], reveal[1]);

function isVisible (element) {
    const {top, bottom} = element.getBoundingClientRect();
    if (bottom < 0) {
        element.classList.remove('reveal_active');
        console.log(element.classList);
    }
    else if (top > window.innerHeight) {
        element.classList.remove('reveal_active');
        console.log(element.classList);
    }
    else {
        element.classList.add('reveal_active');
        console.log(element.classList);
    }
}

setInterval(() => {
    isVisible(reveal[0]);
    isVisible(reveal[1]);
}, 1000);