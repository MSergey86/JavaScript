const btn = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const listBtn = document.querySelectorAll('.dropdown__link')

const lenListBtn = listBtn.length;

btn.addEventListener('click', listActiv);

function clicker () {
    for (let i = 0; i < lenListBtn; i ++) {
        listBtn[i].onclick = () => {
                btnActiv(listBtn[i]);
                return false;
        }
    }
}

clicker();

function listActiv() {
    if (list.className == 'dropdown__list') {
        list.className = 'dropdown__list dropdown__list_active';
    }
    else {
        list.className = 'dropdown__list';
    }
}

function btnActiv(listBtn) {
    btn.textContent = listBtn.textContent;

}