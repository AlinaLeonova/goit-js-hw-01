// let clientCounter = 28;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }



// let password = '';

// do {
//     password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);


// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//     console.log('Logging clients: ', clients[i]);
// }

// // Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//     console.log(client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//     console.log(character);
// }


// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Kiwi';
// let message;

// for (const client of clients) {
//     /*
//      * На каждой итерации мы будем проверять совпадает ли элемент массива с
//      * именем клиента. Если совпадает то мы записываем в message сообщение
//      * об успехе и делаем break чтобы не искать дальше
//      */

//     if (client === clientNameToFind) {
//         message = 'Клиент с таким именем есть в базе данных!';
//         break;
//     }

//     // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//     message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // Клиент с таким именем есть в базе данных!


// split
const message = 'Welcome to Bahamas!';

// Разбивает строку по разделителю, в данном случае это пробел
console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
console.log(message.split('')); // [много букв :)]

// join
const clients = ['Mango', 'Poly', 'Ajax'];

// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
console.log(clients.join(' ')); // "Mango Poly Ajax"
console.log(clients.join(',')); // "Mango,Poly,Ajax"
console.log(clients.join('-')); // "Mango-Poly-Ajax"
