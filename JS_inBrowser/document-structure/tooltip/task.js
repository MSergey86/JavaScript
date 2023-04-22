

let tagA = document.getElementsByTagName("a");

function clicker() {
    let lastTooltip = 0;
    for (let i = 1; i < tagA.length; i ++) {
        tagA[i].addEventListener('click', (e) => {
            e.preventDefault();  

            removeTooltips();

            if (lastTooltip != i) {
                let top = Number(tagA[i].getBoundingClientRect().top)
                let left = Number(tagA[i].getBoundingClientRect().left)

                tagA[i].insertAdjacentHTML('afterEnd',
                `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top+20}px">
                ${tagA[i].getAttribute('title')}
                </div>`)
                lastTooltip = i
            }
            else { 
                (lastTooltip = 0)
            }
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
