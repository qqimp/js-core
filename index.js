// import "./js/dom.js"
// import "./js/variables.js"
import "./js/functions.js"
 
 // получим доступ к хедеру и запишем его в переменную 
const header = document.querySelector('header')
// console.log(header)

const nav = document.querySelector('#nav')
// console.log(nav)

const navlist = document.querySelector('.navlist')
// console.log(navlist)

//  получим доступ к группе элементов
 const items = document.querySelectorAll('.navlist li')
//  console.log(items)

 const links = document.querySelectorAll('.navlist a')

//  посмотрим на элемент хтмл как на обьект 
//  console.dir(navlist)

navlist.style.listStyle = "none"
navlist.style.display = "flex"
navlist.style.width = "500px"
navlist.style.margin = "0 auto"
navlist.style.justifyContent = "space-between"
navlist.style.background = "green"


const decrimentButton = document.querySelector('#button')
const counter = document.querySelector('#p')
const incrementButton = document.querySelector('#button2')
// console.log(decrimentButton,counter,incrementButton)

decrimentButton.addEventListener('click',()=>{
    // console.log('произоешел клик по кнопке') 
    if(counter.textContent === '0') {return}
    else{counter.textContent = Number(counter.textContent) - 1}
})

incrementButton.addEventListener('click',()=>{
    // console.log('произоешел клик по кнопке')
    if(counter.textContent === '10') {return}
    else(counter.textContent = Number(counter.textContent) + 1)
})

// console.dir(counter)
// console.log(counter.textContent)
counter.textContent = 1