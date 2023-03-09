
let goods = [
    {
    id: 1,
    name: 'Рубашка',
    description: 'Синяя в клетку',
    sizes: [38, 42, 48, 52],
    price: 2000,
    available: true,
    },
    {
    id: 2,
    name: 'Шорты',
    description: 'Зеленые',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 1000,
    available: true,
    },
    {
    id: 3,
    name: 'Брюки',
    description: 'Черные',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 2500,
    available: true,
    },
        {
    id: 4,
    name: 'Куртка',
    description: 'Кожаная',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 10000,
    available: true,
    },
    {
    id: 5,
    name: 'Кеды',
    description: 'Синие',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 3500,
    available: true,
    },
];

let basket = [
  { good: goods[1],
   ammount: 2,
  },
  { good: goods[2],
    ammount: 1,
  },

]

//console.log(basket)

//console.log('--11-----------------')
dellAll()
//console.log(basket)

//console.log('----22--------------')
add(3, 1);
add(0, 1);
add(0, 4);
add(1, 1);
//console.log(basket)

//console.log('---33---------------')
dellOne(1)
dellOne(2)
//console.log(basket)

//console.log('--44----------------')

console.log(total())

// ФУНКЦИИ: --------------------------------

function add (i, qty) {
  for (j = 0; j < basket.length; j ++) {
    if (basket[j].good == goods[i]) {
      basket[j].ammount = basket[j].ammount + qty;
      return;
    }
  }
  basket.push({good: goods[i], ammount: qty,}); // добавляет в массив товар с индексом i
}

function dellOne(i) {
  if (basket[i].ammount > 1) {
    basket[i].ammount --;
  }
  else {basket.splice(i, 1)}  // удаляет один элемент с позиции i
}

var arr = []
function dellAll() {
  arr = basket.splice(0);  // удаляет все элементы из массива (arr - массив удаленных элементов)
}

function total() {

  let totalQty = 0;
  for (i = 0; i < basket.length; i++) { 
    totalQty = totalQty + basket[i].ammount
  }
 // console.log('Qty: ', totalQty)
  let totalPrice  = 0;
  for (i = 0; i < basket.length; i++) {
  totalPrice = totalPrice + (basket[i].ammount * basket[i].good.price)
  }
 // console.log('summ: ', totalPrice)

  let totalObj = {
    totalAmount: totalQty,
    totalSum: totalPrice,
  }
  return totalObj;
}
