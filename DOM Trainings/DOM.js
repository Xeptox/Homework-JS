const arr1 = [1, 2, 3, 4, 5, 6]
result = arr1.slice(2,5)
console.log(arr1)

const arr2 = [1, 2, 3, 4, 5, 6]
arr2.splice(2,2)
console.log(arr2)

const arr3 = [1, 2, 3, 4, 5, 6]
arr3.shift()
console.log(arr3)
const red = arr3.shift()
console.log(arr3)
console.log(red)
// const div = document.body.createNode('p')
const par1 = document.getElementById("par1")
par1.innerHTML = "DOM training"
const newTag = document.createElement("p")
document.body.append(newTag)
newTag.innerText = "Hello DOM"
newTag.innerHTML = "Hello again"
newTag.innerText = "Hello DOM"
let newH1_1 = document.getElementById("par1").innerHTML
document.getElementById("H1_1").innerHTML = newH1_1

const link_1 = document.createElement("a")
document.body.appendChild(link_1)
const href_1 = "https://www.w3schools.com"
link_1.innerHTML = "w3schools web site"
link_1.href = "href_1"

