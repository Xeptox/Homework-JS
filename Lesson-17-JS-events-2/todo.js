const task = document.getElementById('task')
const addTaskButton = document.getElementById('addTask')
const taskList = document.getElementById('taskList')

addTaskButton.onclick = addTask


function addTask() {
    const text = task.value.trim()
    if (text) {
        const li = document.createElement('li')
        const buttonDelete = document.createElement('buttonDelete')
        buttonDelete.append('Delete')
        buttonDelete.onclick = function() {
            li.remove()
        }
        li.append(text)
        taskList.append(li)
    }
        task.value = ''

}
