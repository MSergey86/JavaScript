

let tagA = document.getElementsByTagName("a");

function clicker() {
    let p = 0;
    for (let i = 1; i < tagA.length; i ++) {
        tagA[i].addEventListener('click', (e) => {
            e.preventDefault();  

            removeTooltips();

            if (p != i) {
                let top = Number(tagA[i].getBoundingClientRect().top)
                let left = Number(tagA[i].getBoundingClientRect().left)

                tagA[i].insertAdjacentHTML('afterEnd',
                `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top+20}px">
                ${tagA[i].getAttribute('title')}
                </div>`)
                p = i
            }
            else (p = 0)
        })
    }
}

clicker()

function removeTooltips() {
    let tooltips = document.getElementsByClassName('tooltip');

    [...tooltips].forEach(tooltip => {
      tooltip.remove()
    })
}
