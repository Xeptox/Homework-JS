const task = document.getElementById('task')
const addTaskButton = document.getElementById('addTask')
const taskList = document.getElementById('taskList')

addTaskButton.onclick = addTask
task.onkeyup = function (e) {
    if (e.key === 'Enter') {
        addTask()
    }
}

function addTask() {
    const text = task.value.trim()
    if (text) {
        const li = document.createElement('li')
        const buttonDelete = createButtonDel()
        li.append(text, buttonDelete)
        taskList.append(li)
    }
    task.value = ''
}