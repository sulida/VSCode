// let user = {
//     'first name': 'John',
//     lastName: 'Dow',
//     profession: 'Programmer',
//     age: 30,
//     address: {
//         country: "Germany",
//         city: "Berlin"
//     }
// }
// user.age = 45,
// user.skills = ['php', 'c++']

// console.log(`Firstname ${user['first name']}`);
// console.log(`Age ${user.age}`);
// console.log(`Address: Country: ${user.address.country} | City: ${user.address['city']}`);
// console.log(`Skills: ${user.skills}`);

// // Создать объект с названием и ценой продукта и вывести данные в консоль.

// let user2 = {
//     productName: 'Brille',
//     price: 100
// }
// console.log(`Product ${user2.productName} is costed ${user2.price}`); 

// array of objects

// const users = [
//     {
//         id: 1,
//         name: "John",
//         age: 20,
//     },
//     {
//         id: 2,
//         name: "Mary",
//         age: 25,
//     },
//     {
//         id: 3,
//         name: "Bob",
//         age: 30,
//     }
// ]

// for (let i=0; i<users.length; i++) {
//     console.log(`User id: ${users[i].id}`);
//     console.log(`User name: ${users[i].name}`);
    // console.log(`User age: ${users[i].age}`);

// }
// console.log("=====================");
// Создать массив из объектов продуктов (свойства title, price, type) и, пройдясь циклом по массиву, сформировать строки. Вывести их в консоль.

// const products = [
//     {
//         title: "Lenovo",
//         price: 3000,
//         type: "Laptop"
//     },
//     {
//         title: "Blender",
//         price: 1500,
//         type: "Electronics"
//     },
//     {
//         title: "Bicycle",
//         price: 2000,
//         type: "Sport"
//     },
//     {
//         title: "Qwerty",
//         price: 100,
//         type: "Notebook"
//     }
// ]

// for (let i = 0; i< products.length; i++) {
//     console.log(`Title of product: ${products[i].title}`);
//     console.log(`Price of product: ${products[i].price}`);
//     console.log(`Type of product: ${products[i].type}`);


//     console.log(`====================`);

// }

// Пройдитесь циклом по массиву объектов и найдите общую сумму товаров.Вывести название товаров, которые дороже 15000

// const products = [
//     {
//         title: "Lenovo",
//         price: 3000,
//         type: "Laptop"
//     },
//     {
//         title: "Blender",
//         price: 1500,
//         type: "Electronics"
//     },
//     {
//         title: "Bicycle",
//         price: 2000,
//         type: "Sport"
//     },
//     {
//         title: "Qwerty",
//         price: 100,
//         type: "Notebook"
//     },
//     {
//         title: "Nvidia",
//         price: 20000,
//         type: "Electronics",
//     }]
//     let sum = 0

//     for (let i = 0; i< products.length; i++) {
//         // sum = sum + products[i].price
//         sum += products[i].price
//     }
//         console.log(`Sum is`, sum);
//     for (let i = 0; i< products.length; i++) {


//         if (products[i].price > 15000) 

//             console.log(`Title of product: ${products[i].title}`);
//     }


    const products = [
        {
            title: "Lenovo",
            price: 3000,
            type: "Laptop",
            discount: 25
        },
        {
            title: "Blender",
            price: 1500,
            type: "Electronics",
            discount: 13
        },
        {
            title: "Bicycle",
            price: 2000,
            type: "Sport",
            discount: 17
        },
        {
            title: "Qwerty",
            price: 100,
            type: "Notebook",
            discount: 8
        },
        {
            title: "Nvidia",
            price: 20000,
            type: "Electronics",
            discount: 10
        }
    ]

    for (let i = 0; i< products.length; i++) {
        const{title, price, type} = products[i]
        console.log(`Title of product: ${title}`);
    console.log(`Price of product: ${price}`);
    console.log(`Type of product: $type}`);
    console.log(`===================`);
    }


    

    




