
const input = document.getElementById('task__input')
const taskAddBtn = document.getElementById('tasks__add')
let taskList = document.getElementById('tasks__list')
let taskListArray
let closeTask

function taskAdd(inputValue) {

    taskList.insertAdjacentHTML('beforeend',
    `<div class="task">
    <div class="task__title">
    ${inputValue}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`
    )
    getArrays();
}

function getArrays() {
    taskListArray = Array.from(document.querySelectorAll('div.task'));
    closeTask = Array.from(document.querySelectorAll('a.task__remove'));
};

function remove() {
    if (closeTask) {
        closeTask.forEach(function (button, index) {
            button.onclick = function () {
                taskListArray[index].remove();
                return false;
            };
        });
    };
};

input.oninput = function () {
    taskAddBtn.onclick = function () {
        if (input.value) {
            taskAdd(input.value);
            input.value = '';
        };
        remove();
        return false;
    };
};

remove()
