function createButtonDel(callback){
    const buttonDelete = document.createElement('button')
    buttonDelete.append('Delete')
    buttonDelete.addEventListener('click', function(e) {
        e.target.parentElement.remove()
        if(typeof callback === 'function') {
            callback()
        }
    })
    buttonDelete.style.color = 'red'
    buttonDelete.style.marginLeft = '10px'
    return buttonDelete
}