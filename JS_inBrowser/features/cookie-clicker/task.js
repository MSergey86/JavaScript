const count = document.getElementById('clicker__counter');
let size = document.getElementById('cookie');

size.onclick = () => {
   if (count.textContent % 2 == 0) {
    size.width += 50;
    count.textContent = Number(count.textContent) + 1;
   }
   else {
    size.width -= 50;
    count.textContent = Number(count.textContent) + 1;
   }
}