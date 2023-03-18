const p = document.getElementById('timer');

setInterval(() => {
    if (p.textContent > 0) {
    p.textContent = Number(p.textContent) - 1
    }
    else {
        alert('Вы победили в конкурсе!')
    }
}, 1000);

