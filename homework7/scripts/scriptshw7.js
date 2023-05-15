// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function min(num1, num2) {
//     return num1 < num2 ? num1 : num2

// }
// console.log(min(100, 35))

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.


// function even(max, min) {
// if (max < min) {
//     even(min,max)
//     return
// }
//     //    if (max % 2 !== 0) {
//     //     max--
//     //    }
//        for (let i = max; i >= min; i--) {
//         if (i% 2 === 0)
//         console.log(i);
//        }
//     }

// console.log(even(100, 35))

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// function power (a, b) {
//     if (b == null) {
//     return a ** 2
// } else {
//     return a ** b
// }
// }

// console.log(power(3, 3));



// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).


// function sumEvenOdd(n, m) {
//     let sumEven = 0
//     let sumOdd = 0
//     // if (n>m) {
//     //     sumEvenOdd(m, n)
//     //     return
//     // }
//     for (let i = n; i <= m; i++) {

//         if (i % 2 === 0) {
//             sumEven += i

//         } else {
//             sumOdd += i            
//         }      

//     } 
//     return { sumEven,
//          sumOdd }

// }    

// console.log(`Sum of even numbers: ${sumEvenOdd(3,11).sumEven}`);
// console.log(`Sum of odd numbers: ${sumEvenOdd(3,11).sumOdd}`)


// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function sumNumbers(n) {
//     let sumToN = 0
//     for (let i = 1; i <= n; i++) {
//         sumToN += i

// }
// return sumToN
// }
// console.log(sumNumbers(5));

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 


const products = ['Lenovo', 'Dell', 'Asus']

function getLongElement(products) {
    let element = products[0]
    let longElement = products[0].length
    for (let i = 0; i < products.length; i++) {
        if (products[i].length > longElement) {
            longElement = products[i].length
            element = products[i]


        }
    }
    return element
}
console.log(getLongElement(products));