
let obj
let item = document.getElementById("items")
let loader = document.getElementById("loader")

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        obj = JSON.parse(xhr.response)
        let allValutes = obj.response.Valute
        for (let codeValute in allValutes) {
            item.insertAdjacentHTML('beforeend', 
            `<div class="item">
            <div class="item__code">
              ${allValutes[codeValute]['CharCode']}
            </div>
            <div class="item__value">
               ${allValutes[codeValute]['Value']}
            </div>
            <div class="item__currency">
              руб.
            </div>
            </div>
            `
            )
        }
        loader.classList.remove('loader_active')
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
