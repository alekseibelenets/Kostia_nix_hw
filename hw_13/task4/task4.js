// let li = document.querySelectorAll('li')

for (let li of document.querySelectorAll('li')){
     let name = li.textContent
    console.log(name)
}
let a = document.getElementsByTagName('li').length
console.log(a)