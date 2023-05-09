// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
for (let num = 0; num <= 10; num+=2) {
    console.log(num);
}

console.log(`=======================`);
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20

for (let num2 = 55; num2 >= 20; num2--) {
    console.log(num2);
}

console.log(`=======================`);
// Дан массив numbers. Вывести в консоль все числа из массива. Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные квадратв 

const numbers = [3, 5, 11, 2, 8, 1, 6];
console.log(numbers);
let numbers_squared = []

for (i = 0; i < numbers.length; i++) {
numbers_squared.push(numbers[i]**2)
}
console.log(numbers_squared);

console.log(`=======================`);
// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

let last_elem = numbers_squared[numbers_squared.length-1]
console.log(last_elem);

console.log(`=======================`);

// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = {
first_name: 'Win', 
last_name: 'Winner', 
age: 20, 
salary: 5000
}

console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`);
