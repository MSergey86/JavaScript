
const input = document.getElementById('task__input')
const taskAddBtn = document.getElementById('tasks__add')
let taskList = document.getElementById('tasks__list')

function taskAdd(e) {
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
}

function del() {
    let closeTask = document.getElementsByClassName('task__remove');
    
    [...closeTask].forEach(element => {
          element.addEventListener('click', (e) => {
            e.target.closest(".task").remove();
          })
    })
}

setInterval(() => del(), 100)

taskAddBtn.addEventListener("click", taskAdd);
