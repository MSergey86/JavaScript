
const arr = document.querySelectorAll('.menu__link');
const len = arr.length;
let numMenuActiv = 0;

function clicker() {
    for (let i = 0; i < len; i++) {
        arr[i].onclick = () => {
            let menuItem = arr[i].closest('.menu__item');
            let menuSub = menuItem.querySelector('.menu_sub');
            if (menuSub != null) {
                if (menuSub.className == 'menu menu_sub') {
                    menuSub.className = 'menu menu_sub menu_active';
                    if (document.getElementsByClassName('menu menu_sub menu_active').length > 1) {
                        let menuItemActive = arr[numMenuActiv].closest('.menu__item');
                        menuItemActive.querySelector('.menu_sub').className = 'menu menu_sub';
                        // console.log(numMenuActiv);
                    }
                    numMenuActiv = i;
                }
                else {
                    menuSub.className = 'menu menu_sub';
                }
                return false;
            }
        }
    }
  }
  
  clicker();
