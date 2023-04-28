let json
let pollTitle = document.getElementById("poll__title")
let pollAnswers = document.getElementById("poll__answers")

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        json = JSON.parse(xhr.response)

        let arr = json.data.answers;
        pollTitle.insertAdjacentHTML('beforeend', json.data.title)
        arr.forEach(element => {
            pollAnswers.insertAdjacentHTML('beforeend', 
            `<button class="poll__answer">
            ${element}
            </button>`
            )
        })
        let answersBtns = document.getElementsByClassName('poll__answer');
        [...answersBtns].forEach(element => {
            element.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
            })
        })

    }

})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
