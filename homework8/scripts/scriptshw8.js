// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const numbersEl = document.querySelector('.numbers')
// for(let i = 100; i >=50; i-=10) {
//     const pElem = document.createElement('p')
//     pElem.innerText = i
//     numbersEl.append(pElem)

// }

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
// function createPar(strings) {
// const containerEl = document.querySelector('.strings_container')
// const arr = ["Lenovo","Asus", "HP", "Dell"]
// for(let i = 0; i < arr.length; i++) {
//     const pElem = document.createElement('p')
//     pElem.innerText = arr[i]
//     containerEl.append(pElem)
// }
// return containerEl
// }

// createPar (arr)

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const persons = [
    {
        first_name : 'John',
        last_name: 'Black',
        age: 25
    },
    {
        first_name : 'Karl',
        last_name: "Lagerfeld",
        age: 25
    },
    {
        first_name : 'Sonja',
        last_name: "Riekel",
        age: 15
    },
]
const userEl = document.querySelector('.users_container')

for(let i = 0; i < persons.length; i++) {
    if (persons[i].age >=18) {
        const{first_name, last_name, age} = persons[i]
        const pElemFirstName = document.createElement('p')
        pElemFirstName.innerText = `First name: ${first_name}`
        const pElemLasttName = document.createElement('p')
        pElemLasttName.innerText = `Last name: ${last_name}`
        const pElemAge = document.createElement('p')
        pElemAge.innerText = `Age: ${age}`

        const divEl = document.createElement('div')
        divEl.append(pElemFirstName, pElemLasttName, pElemAge)
        userEl.append(divEl)

    }
}

