// 1-й вариант --------------------------
/* const a = document.getElementsByClassName('menu__link');
const b = document.getElementsByClassName('menu menu_sub');

a[1].onclick = () => {
    b[0].className = 'menu menu_sub menu_active';
    b[1].className = 'menu menu_sub';
    return false;
}

a[5].onclick = () => {
    b[0].className = 'menu menu_sub';
    b[1].className = 'menu menu_sub menu_active';
    return false;
} */
//2-й вариант -------------------------------

const arr = document.querySelectorAll('.menu__link');
const l = arr.length;
let j = 0;

function clicker() {
    for (let i = 0; i < l; i++) {
        arr[i].onclick = () => {
            let m = arr[i].closest('.menu__item');
            let n = m.querySelector('.menu_sub');
            if (n != null) {
                if (n.className == 'menu menu_sub') {
                    n.className = 'menu menu_sub menu_active';
                    if (count()) {
                        arr[j].closest('.menu__item').querySelector('.menu_sub').className = 'menu menu_sub';
                        console.log(j);
                    }
                    j = i;
                }
                else {
                    n.className = 'menu menu_sub';
                }
                return false;
            }
        }
    }
    setTimeout(clicker, 1); // ещё раз, через миллисекунду
  }
  
  clicker();

  function count () {
    let count  = document.getElementsByClassName('menu menu_sub menu_active').length;
    if (count > 1) {
        return true;
    }
    else {
        return false;
    }
  }
  