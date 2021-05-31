import images from './images.js'
console.log(images)

//получаем доступы к дом элементам
const gallerySection = document.querySelector('.gallery')
console.log(gallerySection)

const galleryList = document.querySelector('.galleryList')
console.log(galleryList)

const form = document.querySelector('form')
console.log(form)

const registerForm = document.querySelector('.register-form')
console.log(registerForm)
registerForm.style.textAlign = "center"
//обьявим класс для создания обьектов регистрации
class Register {
  constructor(name, tel, email, password) {
    this.name = name
    this.tel = tel
    this.email = email
    this.password = password
  }
}

const users = []

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(event)
  console.log(event.target)
  console.dir(event.target)
  console.log(event.target.elements)
  console.log(event.target.elements.name.value)
  console.log(event.target.elements.tel.value)
  console.log(event.target.elements.email.value)
  console.log(event.target.elements.password.value)
  // destructuring
  const { name, tel, email, password, range} = event.target.elements
  console.log(range.value)
  registerForm.style.fontSize = `${range.value}px`
  const user = new Register(name.value, tel.value, email.value, password.value)
  users.push(user)
  console.log(users)
  let localUsers = JSON.stringify(users)
  localStorage.setItem('users', localUsers)
  form.reset()
})

//создадим новый элемент
const title = document.createElement('h2')
console.log(title)
console.dir(title)

title.textContent = 'gallery'

const item = document.createElement('li')
console.log(item)
const image = document.createElement('img')
image.setAttribute(
  'src',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoJd0WGkpnaqB9HfpWOQLPtLgK3SzS07ROw&usqp=CAU',
)

function createItems(array) {
  return array.map((element) => {
    const item = document.createElement('li')
    const img = document.createElement('img')
    img.setAttribute('src', element)
    item.append(img)
    return item
  })
}

const addBtn = `<button type = "button" id = "1"> add </button>`
const removeBtn = `<button type = "button" id = "2"> remove </button>`

//встроим элемент в html

gallerySection.insertAdjacentElement('afterbegin', title)

//прежде чем встроить элемент списка в сам список встроим в него изображение

item.append(image)

galleryList.append(item)

galleryList.insertAdjacentHTML('beforebegin', addBtn)
galleryList.insertAdjacentHTML('beforebegin', removeBtn)

const add = document.getElementById('1')
const remove = document.getElementById('2')

add.addEventListener('click', () => {
  const items = createItems(images)
  console.log(items)
  galleryList.append(...items)
})

remove.addEventListener('click', () => {
  galleryList.innerHTML = ''
})

//локальное хранилище браузера
console.log(localStorage)

//конструктор json используется для преобразования данных в формат json
console.log(JSON)
