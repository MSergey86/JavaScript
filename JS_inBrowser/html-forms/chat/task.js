
const widget = document.getElementsByClassName('chat-widget')[0]
const input = document.getElementById('chat-widget__input')
let messages = document.querySelector( '.chat-widget__messages');


const botMessages = [
    "Кто тут?",
    "Мы ничего не будем вам продавать",
    "Где ваша совесть?",
    "Вы не купили ни одного товара, чтобы так с нами разговаривать!",
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше!",
  	"Я уже отвечал на этот вопрос!",
	"До свидания!",
	"Учись правильно задавать вопросы!",
	];

widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active')
})

function main () {
            input.addEventListener('keyup', (key) => {
            if (key.code == 'Enter') {
                if (input.value.length > 0 ) {
                    let date = new Date();
                    var botMessage = botMessages[Math.floor(Math.random()*botMessages.length)]
                    messages.innerHTML += `
                    Сообщение от клиента
                    <div class="message">
                        <div class="message__time">${date.toLocaleTimeString()}</div>
                        <div class="message__text">
                        ${input.value}
                        </div>
                    </div>
                    Сообщение от робота
                    <div class="message">
                        <div class="message__time">${date.toLocaleTimeString()}</div>
                        <div class="message__text">${botMessage}</div>
                    </div>
                    `
                }
            }
        })
}
main();