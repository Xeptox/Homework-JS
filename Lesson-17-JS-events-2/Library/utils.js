function createButtonDel(){
    const buttonDelete = document.createElement('button')
    buttonDelete.append('Delete')
    buttonDelete.onclick = function(e) {
        e.target.parentElement.remove()
    }
    return buttonDelete
}