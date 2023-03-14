class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
        setAvailable() {
            this.available = this.available != true
        }
    }

//------class GoodList-------------------------------------------------

class GoodList {
    #goods;
    constructor(filterName, sortPrice, sortDir, ...goods) {
        this.#goods = goods;
        this.filterName = filterName;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
    get list() {
        if (this.sortPrice == true) {    //включение сортировки по цене
            if (this.sortDir == true) {
                this.#goods.sort((good1, good2) => good1.price - good2.price); //сортировка по возрастанию
            }
            else {
                this.#goods.sort((good1, good2) => good2.price - good1.price) // сортировки поубыванию
            }
        }
        if (this.filterName != NaN) {
           let regexp = new RegExp(this.filterName); 
           return this.#goods.filter(good => regexp.test(good.name)); //сортировка по имени товара
        }
    }

    add(good) {                                     // добавляет новый товар
        for (let j = 0; j < this.#goods.length; j ++) {
            if (this.#goods[j].id == good.id) {
              return;
            }
        }
        this.#goods.push(good, );
    }

    remove(id) {                                        //удаляет товар по id
        for (let j = 0; j < this.#goods.length; j ++) {
            if (this.#goods[j].id == id) {
              this.#goods.splice(j, 1);
            }
        }
    }
}

//----------class GoodList END-----------------------------------------------------

//----------class BasketGood-------------------------------------------------------

class BasketGood extends Good {
    constructor(good, amount) {
        super (good.id, good.name, good.description, good.sizes, good.price, good.available);
        this.amount = amount;
    }

}
//----------class BasketGood END------------------------------------------------------

//----------class Basket---------------------------------------------------

class Basket {
    constructor(...goods) {
        this.goods = goods;
    }

    get totalAmount() {
        return this.goods.reduce((qty, number) => qty + number.amount, 0) //общее кол-во товаров к корзине
    }
    get totalSum() {
        return this.goods.reduce((sum, number) => sum + (number.price * number.amount), 0) //общая цена товаров в корзине
    }
    
    add(good, qty) {
        for (let j = 0; j < this.goods.length; j ++) {
          if (this.goods[j].id == good.id) {
            this.goods[j].amount += qty;
            return;
          }
        }
        good.amount = qty;
        this.goods.push(good, ); // добавляет в массив товар
    }

    remove(good, qty) {
        for (let j = 0; j < this.goods.length; j ++) {
          if (this.goods[j].id == good.id) {
            if (this.goods[j].amount <= qty) {
                this.goods.splice(j, 1);
            }
            else {
                this.goods[j].amount -= qty;
            }
            return;
          }
        }
    }

    clear() {
        this.goods.splice(0); //удаляет все из корзины
    }

    removeUnavailable() {
        return this.goods.filter(good => good.available == true); //меняет свойство available
    }
}

// --------MAIN----------------

const good1 = new Good(1, 'Рубашка', 'Синяя в клетку', [38, 42, 48, 52], 2000, true);
const good2 = new Good(2, 'Шорты', 'Зеленые', ['S', 'M', 'L', 'XL'], 1000, true);
const good3 = new Good(3, 'Рубашка', 'Черная', ['S', 'M', 'L', 'XL'], 2500, false);
const good4 = new Good(4, 'Куртка', 'Кожаная', ['S', 'M', 'L', 'XL'], 10000, true);
const good5 = new Good(5, 'Кеды', 'Синие', ['S', 'M', 'L', 'XL'], 3500, true);

//---Проверка setAvailable-----------
/*console.log(good3);
good3.setAvailable();
console.log(good3);
good3.setAvailable();
console.log(good3);*/
//-------------------------------------

let basketGood1 = new BasketGood(good1, 1);
let basketGood2 = new BasketGood(good2, 1);
let basketGood3 = new BasketGood(good3, 1);
let basketGood4 = new BasketGood(good4, 1);
let basketGood5 = new BasketGood(good5, 1);

//console.log(basketGood1);

let basket1 = new Basket(basketGood1, basketGood2, basketGood3);


/*console.log(basket1);
console.log('amount: ', basket1.totalAmount);
console.log('sum: ', basket1.totalSum);
console.log('---------------------------------------');

basket1.add(good3, 50);
basket1.add(good5, 5);
console.log(basket1);
console.log("----!!!!!!!!!!!!!!!!!---------")

basket1.remove(basketGood5, 40);
console.log(basket1);

console.log("----0000000000000---------");
basket1 = basket1.removeUnavailable();
console.log(basket1);

console.log("----&&&&&&&&&&&&&&---------");
basket1 = basket1.clear;
console.log(basket1);*/

//----------GoodList-------------------------
let goodList1 = new GoodList (NaN, true, true, good1, good2, good3, good4, good5);
let goodList2 = new GoodList (NaN, true, false, good1, good2, good3, good4, good5);
let goodList3 = new GoodList (/рубашка/i, true, true, good1, good2, good3, good4, good5);

/*console.log(goodList1);
//--------remove-good2------------------
goodList1.remove(2);
console.log(goodList1);

//---------add good2------------------
goodList1.add(good2);
console.log(goodList1);

//---------Sort-goodLost1-------------------------
goodList1.list;
console.log(goodList1);

//---------Sort-goodLost2-------------------------
goodList2.list;
console.log(goodList2);*/

//---------Sort-goodLost3-------------------------
console.log('---------Сортировка---------');
goodList3 = goodList3.list;
console.log(goodList3);


console.log('---------Корзина-----------');
basket1.add(basketGood5, 50);
basket1.remove(basketGood5, 45);
basket1.removeUnavailable();
console.log(basket1);

console.log('Товаров в корзине: ', basket1.totalAmount);
console.log('Общая стоимость товаров в корзине: ', basket1.totalSum);
