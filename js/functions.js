sayHello()
sayHello()
sayHello()
function sayHello() {
  console.log('Hello')
}
sayHello()

const myFunction = function () {
  console.log('goodbye')
}
myFunction()

const myFunction1 = () => {
  console.log('goodbye')
}
myFunction1()

function plus(num1, num2) {
  let result = num1 + num2
  return result
}
let total = plus(5, 10)
console.log(total)
total = plus(3, 5)
console.log(total)

function div(num1, num2) {
  let result = num1 / num2
  return result
}
let total1 = div(10, 5)
console.log(total1)

function minus(num1, num2) {
  let result = num1 - num2
  return result
}
let total2 = minus(10, 5)
console.log(total2)

function mult(num1, num2) {
  let result = num1 * num2
  return result
}

let total3 = mult(10, 5)
console.log(total2)

function step(num1, num2) {
  let result = num1 ** num2
  return result
}

let total4 = step(10, 5)
console.log(total4)

function ost(num1, num2) {
  let result = num1 % num2
  return result
}

let total5 = ost(10, 5)
console.log(total5)

// task1

function checkLeap(year) {
  if (year % 4 === 0) {
    console.log('Этот год высокосный')
  } else {
    console.log('этот год не высокосный')
  }
}
let total6 = checkLeap(2004)
let total7 = checkLeap(2005)

// task2

// function getGuess() {
//   let userNumber = prompt('введите число от 0 до 10')
//   console.log( userNumber)
//   let compNumber = Math.round(Math.random() * 10)
//   console.log( compNumber)
//   if ((userNumber == compNumber)) {
//     alert('Вы угадали')
//   } else {
//     alert('Вы не угадали')
//   }
// }
// getGuess()

// task3

function calculate(num1, num2, operation) {
  if (operation === 'multiplication') {
    return num1 * num2
  }
  if (operation === 'division') {
    return num1 / num2
  }

  if (operation === 'subtraction') {
    return num1 - num2
  }

  if (operation === 'addition') {
    return num1 + num2
  }
}
let calc = calculate(2, 3, 'addition')
console.log(calc)

//task4

function transformDegrees(value) {
  console.log(value)
  if (value.includes('F')) {
    console.log('Фаренгейты')
    let newValue = Math.round((Number.parseInt(value) - 32) / 1.8)
    console.log(newValue)
    return `Ваше значение ${value} успешно преобразован в ${newValue} °C`
  } else if (value.includes('C')) {
    let newValue = Number.parseInt(value) * 1.8 + 32
    console.log(newValue)
    return `Ваше значение ${value} успешно преобразован в ${newValue} °F`
  } else {
    console.log('Введите корректное значение')
  }
}
let transoform = transformDegrees('100°F')
console.log(transoform)
let transoform1 = transformDegrees('100°C')
console.log(transoform1)

// function numb() {
//   let userNumber = prompt('введите число от 18 до 36')
//   console.log(userNumber)
//   if (userNumber > 37) {
//     alert('Вы не прошли')
//   } else if (userNumber < 17) {
//     alert('вы не прошли')
//   } else if (userNumber < 37) {
//     alert('вы прошли')
//   }
// }
// numb()

function bal() {
    let user = prompt('введите число от 0 до 100')
    console.log(user)
    if (user > 0 && user <= 20) {
      alert('F')
    } else if (user >= 21 && user <= 44 ) {
      alert('e')
    }else if (user >= 45 && user <= 59) {
        alert('d')
      }else if (user >= 60 && user <= 74 ) {
        alert('c')
      }else if (user >= 75 && user <=88  ) {
        alert('b')
      }else if (user >= 89 && user <= 100 ) {
        alert('a')
      }
      else{
          console.log("введите корректное значение")
      }
  }
  bal()