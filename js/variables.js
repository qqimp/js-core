// создадим переменные со строчными значениями 
// const name = "Max" 
// console.log(name)
// const lastname = "Anikin"
// console.log(lastname)
// const song = "Whole lotta love"
// console.log(song)
// const band = "Led Zeppelin"
// console.log(band)
// const guitar = "stratocaster"
// console.log(guitar)
// const collor = "white"
// console.log(collor)
// const favGuitarist = "Jimi Hendrix" 
// console.log(favGuitarist)
// let age = 15
// console.log(age)
// let userAge = 20
// console.log(userAge)
// let count = 0
// console.log(count)
// let height = 175
// console.log(height)
// let isOnline = false
// console.log(isOnline)
// let isMariage = false
// console.log(isMariage)
// let isDriving = false
// console.log(isDriving)
// console.log(2+1+'1')
// console.log('2'*'2')
// console.log('2'/'2')
// console.log('2'-'1')

// // приведение значений к Boolean 
// console.log(Boolean(1))
// console.log(Boolean(0))
// console.log(Boolean(5))
// console.log(Boolean(Infinity))
// console.log(Boolean(' '))
// console.log(Boolean(undefined))
// console.log(Boolean(null))

// console.log("hello")
// console.dir({name: "Max"})
// console.table([{name :"Max"}, {age: "16"} , {name: "Dima"}, {age: "22"}])
// console.warn('Warning')
// console.error("error")

const name = "Max"

let age = "13"
console.log("age", age);

console.log(
    typeof "Max","Max"
)
console.log(typeof 30,30)
console.log(typeof true,true)
console.log(typeof false,false)
console.log(typeof null,null)
console.log(undefined, undefined)

// alert("Hello")
// let message = prompt("enter the data")
// console.log("message" ,message)
// let answer = confirm("Вам есть 18")
// console.log(answer)

const musicians = [
{
    name :'A',
    band :'A',
    bestSong : 'A',
},
{
    name :'B',
    band :'B',
    bestSong : 'B',
},
{
    name :'C',
    band :'C',
    bestSong : 'C',
},
{
    name :'D',
    band :'D',
    bestSong : 'D',
},
{
    name :'E',
    band :'E',
    bestSong : 'E',
},
{
    name :'F',
    band :'F',
    bestSong : 'F',
},
{
    name :'G',
    band :'G',
    bestSong : 'G',
},
{
    name :'H',
    band :'H',
    bestSong : 'H',
},
{
    name :'I',
    band :'I',
    bestSong : 'I',
},
{
    name :'G',
    band :'G',
    bestSong : 'G',
},
]
console.log(musicians)
console.log(musicians[0])
console.log(musicians)
console.log(musicians[1])
console.log(musicians)
console.log(musicians[2])
console.log(musicians)
console.log(musicians[3])
console.log(musicians)
console.log(musicians[4])
console.log(musicians)
console.log(musicians[5])
console.log(musicians)
console.log(musicians[6])
console.log(musicians)
console.log(musicians[7])
console.log(musicians)
console.log(musicians[8])
console.log(musicians)
console.log(musicians[9])

// добавление элементов
musicians.push(3 , 2)
console.log(musicians)
musicians.unshift(3 , 2)
console.log(musicians)

//удаление элементов
musicians.pop()
console.log(musicians)

musicians.shift()
console.log(musicians)

//швейцарский нож
//удаление элементов
musicians.splice(0,1)

//добавление и замена
musicians.splice(-1, 2, {}, {})
console.log(musicians)
musicians.splice(4, 0, {}, {})
console.log(musicians)

//копирование масивов

const newMusicians = musicians.slice()
console.log(newMusicians)
console.log(newMusicians === musicians)

const x = musicians
console.log(x === musicians) 

const newArray = [...musicians]
console.log(newArray === musicians)

const emptyObjects = musicians.slice(4,6).concat(musicians.slice(8))

for (let i = 0; i < musicians.length; i = i+1) {
    if(musicians[i].band === undefined) {
    continue
}
console.log(musicians[i].band)
}
for (let i = 0; i < musicians.length; i = i+1) {
    if(musicians[i].band === undefined) {
    break
}
console.log('break', musicians[i].band)
}


// функциональные методы масива 

const mapArray = musicians.map((element)=>{
    console.log(element)
    return element
})
console.log('mapArray', mapArray)
console.log(mapArray === musicians)

const filterArray = musicians.filter((element)=>{
    if(element.band === undefined) return element
})
console.log(filterArray)

const filteredArray1 = musicians.filter((element)=>element.band === undefined)
console.log(filteredArray1)

const findArray = musicians.find((element)=> element.band === undefined)
console.log(findArray)

const numbers = [1,10,20,35,47]
const total = numbers.reduce((total, element)=> total + element, 0)
console.log(total)

const newArr = numbers.reduce((arr,elem) => {
console.log(arr)
console.log(elem)
arr.push(elem + "")
return arr
}, [])
console.log(newArr)

for(let elem of numbers){
    console.log("цикл forOff", elem + 1)
}

numbers.forEach((elem) => console.log('метод forEach' ,elem +1))



























































































































































































































































































































































































































