
let tagA = document.getElementsByTagName("a");

// console.log(a[1].getAttribute('title'))

    for (let i = 1; i < tagA.length; i ++) {
        console.log("111111")
        tagA[i].insertAdjacentHTML('beforeEnd',
    `<div class="tooltip" style="left: 0; top: 0">
    ${tagA[i].getAttribute('title')}
    </div>`)
    }

const tooltips = document.getElementsByClassName('tooltip');

function clicker() {
    for (let i = 1; i < tagA.length; i ++) {
        tagA[i].addEventListener('click', (e) => {
            e.preventDefault();
            [...tooltips].forEach(tooltip => {
                tooltip.classList = 'tooltip'
            })
            tooltips[i-1].classList.add('tooltip_active');
        })
    }
}

clicker()