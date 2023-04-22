
const products = document.querySelectorAll('.product')
const productAddButton = document.querySelectorAll('.product__add')

const image = document.querySelectorAll('.product__image')

const inc = document.getElementsByClassName('product__quantity-control_inc')
const dec = document.getElementsByClassName('product__quantity-control_dec')

const productQuantity = document.getElementsByClassName('product__quantity-value')
const basket = document.getElementsByClassName('cart__products')


for (let i = 0; i < inc.length; i++) {        //добавление количества
    inc[i].addEventListener('click', () => {
        productQuantity[i].textContent = Number(productQuantity[i].textContent) + 1;
    })
}

for (let i = 0; i < dec.length; i++) {   //уменьшение количества
    dec[i].addEventListener('click', () => {
        if (productQuantity[i].textContent > 1) {
             productQuantity[i].textContent = Number(productQuantity[i].textContent) - 1;
             console.log(productQuantity[i].textContent)
        }
    })
}


for (let i = 0; i < productAddButton.length; i ++) {  // добавление в корзину
    productAddButton[i].addEventListener('click', (e) => {
        e.preventDefault();
        let cartProducts = document.querySelectorAll('.cart__product ');
        const productInCard = Array.from(cartProducts).findIndex(item => item.getAttribute('data-id') == i+1);
        if(productInCard == -1) {   // добавлять новый элемент продукта
            basket[0].insertAdjacentHTML('beforeend', 
            `<div class="cart__product" data-id="${i+1}">
            <img class="cart__product-image" src="${image[i].src}">
            <div class="cart__product-count">${productQuantity[i].textContent}</div>
            </div>`
            )                                         
        } 
        else {                    // увеличивать количество у productInCard
            cartProducts[productInCard].children[1].textContent = Number(cartProducts[productInCard].children[1].textContent) + Number(productQuantity[i].textContent)                                
        }
    })
}
