// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

// {
//   const input = prompt("Enter number");
//   const number = Number(input); // NaN
//   if (Number.isNaN(number)) {
//     console.log("Not a number!");
//   } else {
//     console.log(`10% from you number is ${number * 0.1}`);
//   }
// }

// Написать программу, которая получает два числа и выводит наименьшее

// const num1 = Number (prompt ("Enter the 1st number"));
// const num2 = Number (prompt ("Enter the 2nd number"));
// // преобразовали в число на всякий случай

// if (Number.isNaN(num1) || Number.isNaN(num2) || num1 == num2) {
//     console.log("Error")
// } else{
//     if (num1 < num2) {
//     console.log(num1)
// } else {
//     console.log(num2)
// }
// }


// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

// const num3 = Number (prompt ("Enter the 3d number"));

// if (num3 < 100) {
//     console.log("The number is less than 100")
// } else if (num3 > 100) {
//             console.log("The number is more than 100")
//     } else if (num3 === 100) {
//         console.log("The number is 100")
//     } else {
//         console.log("Not a")
//     }


// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

const name = prompt("Enter your name, please: ");
const age =  (prompt("Enter your age, please: "))

if (age >= 18) {
    console.log(`Hello, ${name}`)
} else if (age < 18 && age > 0) {
    console.log(`Hi, ${name} `)
}else {
    console.log("Default name or age")
}