// console.log("Hello world!")

//const
//let
//var

// const text = "Hello world from const!"
// let text = "Hello world from let!"

// console.log(text)

// A-Z a-z 0-9 $ _
// text1
// text_1
// $text
// Text
// 9text нельзя

// car name
// car_name = snake case
// carName = camel case
// car-name = kebab case, error

// const name = prompt("Введите имя!")
// console.log(name)

// const hello = "Привет, " + name
// const hello = `Привет, ${name}`
// console.log(hello)
// const num1 = 10
// const num2 = 10.62
// const text = "hello"

// console.log(typeof(num1), typeof num2)
// console.log(typeof(text))

// const r = 12
// const g = 34
// const b = 14

// const text = '"rgb(' + r + ", " + g + ", " + b + ')"'
// console.log(text)

// const text2 = `"rgb( ${r}, ${g}, ${b})"`
// console.log(text2)

// console.log(r + b)
// console.log(b % r)
// console.log(r ** b)

// let num = 10
// let strNum = "50"
// console.log(num)
// console.log(strNum)
// console.log(`type of num = ${typeof num}`)
// console.log(`type of strNum = ${typeof strNum}`)
// num = String(num)
// console.log(num)
// // strNum = Number(strNum)
// strNum = +strNum
// console.log(strNum)
// console.log(`type of num after convert = ${typeof num}`)
// console.log(`type of strNum after convert = ${typeof strNum}`)
// console.log("==============================================")

// let str1 = "test"
// console.log(+str1)
// console.log(typeof NaN)

// console.log("==============================================")
// console.log(2 + "2")  // 22 строка
// console.log(4 - "2")  // 2 число
// console.log(4 -"a")  // Nan
console.log("==============================================")

// const age = prompt("Введите Ваш возраст!")
// console.log(`Ваш возраст ${age}`)

// const num3 = prompt("Введите число")
// console.log(num3 ** 2)

// const num4 = prompt ("Введите первое число")
// const num5  = prompt ("Введите второе число")
// console.log(`Сумма = ${+num4 + +num5}`)

// console.log("=====================If else=========================")

// if (7 % 2 === 0){
//     console.log('is even')
// } else {
//     console.log('is odd')
// }

// console.log("==============================================")
// const num1 = +prompt("1 number")
// const num2 = +prompt("2 number")

// if (num1 > num2) {
//     console.log(num1)
// } else {
//     console.log(num2)
// }

console.log("==============================================")
// Написать программу, которая считывает через prompt одно число и выводит одну из строк “число положительное”, “число отрицательное”, “число равно нулю

// const num3 = +prompt("Enter a number")

// if (num3 > 0) {
//     console.log("The number is positive")
// } else if (num3 < 0) {
//     console.log("The number is negative")
// } else if (num3 === 0){
//     console.log("The number is 0")
// } else {
//     console.log("Not a number")
// }

console.log("==============================================")
// Написать программу, которая считывает значение из prompt и выводит фраз “Это значение можно преобразовать в число” или “Это значение преобразовать в число не получится. Получится NaN”

const text = prompt("Enter value")

if (isNaN(text)) {
    console.log("This is not a number")

} else {
    
    console.log("The value could be a number")
}





