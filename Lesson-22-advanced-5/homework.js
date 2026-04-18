let group = {
    title: 'Fullstack 34-64',
    students: ['Alina', 'Anna', 'Lyuba', 'Maria', 'Marta', 'Melissa', 'Olga', 'Tatyana'],
    showStudents: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`)
        }
        this.students.forEach(show)
    }
}

// Unmodified code
group.showStudents()
const newGroup = group
group = null
console.log('==========')
newGroup.showStudents()