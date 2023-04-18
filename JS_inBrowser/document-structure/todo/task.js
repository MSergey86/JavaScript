
const input = document.getElementById('task__input')
const taskAdd = document.getElementById('tasks__add')
let taskList = document.getElementById('tasks__list')

taskAdd.addEventListener('click', (e) => {
    e.preventDefault()
    if (/\S/.test(input.value)) {     //проверка чтоб был хоть один символ
        taskList.insertAdjacentHTML('beforeend',
       `<div class="task">
        <div class="task__title">
        ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`
    )
    input.value = ''
    }
})

function del() {
let tasks = document.getElementsByClassName('task')
let closeTask = document.getElementsByClassName('task__remove')
for (let i = 0; i < closeTask.length; i++) {
    // console.log(tasks[i].textContent)
    closeTask[i].addEventListener('click', () => {
        tasks[i].remove();
    })
}
}

setInterval(() => del(), 100)



