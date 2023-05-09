// const arr = [1, 2, 3, 56]
// arr [2] = 'hello'
// arr[3] = arr
// arr.push(7, 10, 5)            // add the last elements
// console.log(arr)
// const LastElem = arr.pop()   // remove and get the last element
// console.log(arr)
// console.log(LastElem)
// const shift1 = arr.shift()  // remove first and get it
// arr.unshift(27,30)           // add first elements
// 

// const num1 = +prompt("Enter the 1st number")
// const num2 = +prompt("Enter the 2nd number")
// const num3 = +prompt("Enter the 3d number")

// arr.push(num1,num2, num3)
// console.log(arr);

console.log("===============================")
// Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.Пример: Исходный массив [1, 4, 2, 5, 3]Итоговый массив [1, 16, 4, 1, 9]

// const arr2 =  [1, 4, 2, 5, 3]
// const arr3 = []

// arr3.push(arr2[0]**2, arr2[1]**2, arr2[2] **2, arr2[3]**2, arr2[4]**2)
// arr3[0] = arr2[0] ** 2
// arr3[1] = arr2[1] ** 2
// arr3[2] = arr2 [2] ** 2
// arr3 [3] = arr2[3] ** 2
// arr3 [4] = arr2[4] ** 2

// for (let i =0; i < arr2.length; i++) {
//     console.log(arr2[i])
//     arr3.push(arr2[i]**2)
// }

// console.log(arr3)


console.log("======================================");
// Написать цикл, который выводит только положительные числа из массива. Написать цикл, который выводит только четные числа

// const arr = [1, 4, -2, 5, 3, -5, 8, 16, 11, 23, -12, 4, -32]

// for (let i=0; i<arr.length; i++) {
//     if (arr[i]>0) {
//         console.log(arr[i]);
//     }
// }

// console.log("======================================");

// for (let i=0; i<arr.length; i++) {
//     if (arr[i]%2 === 0) {
//         console.log(arr[i]);
//     }
// }

console.log("======================================");
// Вывести только те значения массива, индекс которых кратен тремВывести значения массива справа налево с шагом два

// const arr = [1, 4, -2, 5, 3, -5, 8, 16, 11, 23, -12, 4, -32]
// console.log(arr);

// for (let i=0; i<arr.length; i++) {
//     if (i % 3 === 0) {
//         console.log(i, arr[i]); 
//     }
// }

// for (let i=0; i<arr.length; i+=3) {
    
//         console.log(i, arr[i]); 
    
// }



// console.log("======================================");
// for (let i = arr.length - 1; i>=0; i-=2) {
    
//         console.log(i,arr[i]); 
//     }



// Разбор задачи на поиск агрегации по массиву. На примере суммы всех элементов массива.

// let sum = 0

// for (let i=0; i<arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)


// Найти сумму положительных чисел.Найти сумму чисел, чей индекс равен значению элемента.

const arr = [1, 4, 2, 5, 3, 5, 8, 7, 11, 23, -12, 11, -32]

// let sum = 0
// for (let i=0; i<arr.length; i++) {
//     if (arr[i]>0)
//         sum = sum + arr[i]
//     }
//     console.log(sum)
    
//     console.log("======================================");
//     let sum2 = 0


//     for (let i=0; i<arr.length; i++) {
//         if (arr[i]===i)
//             sum2 = sum2 + arr[i]
//         }
//         console.log(sum2)

        // Найти сумму четных чисел и вывести в консоль. Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
        // let sum = 0
        // for (let i=0; i<arr.length; i++) {
        //     if (arr[i] % 2 === 0)
        //         sum = sum + arr[i]
        //     }
        //     console.log(sum)

            let sum2 = 0
            let sum3 = 0

            for (let i=0; i<arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    sum2 = sum2 + arr[i]
                } else { sum3 =sum3 +arr[i]

                }
            }
            console.log(sum2);
                console.log(sum3);
            if (sum2 > sum3) {
                console.log("Difference", sum2-sum3) 
            } else {
                console.log("Difference", sum3-sum2)
            }
               














