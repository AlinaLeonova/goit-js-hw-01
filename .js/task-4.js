// const orderPieces = null;
// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// if (orderPieces === 4) { console.log('Вы купили 4 дроидов, на счету осталось 11580 кредитов') };
// if (orderPieces === null) { console.log(CANCELED_BY_USER) };


// let totalPrice = orderPieces * pricePerDroid;
// console.log(totalPrice)// Write code on this line
// let balanceCredit; // Write code on this line
// let message;


const orderPieces = null;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid;
let balanceCredit = credits - totalPrice;
let message;

if (orderPieces === 4) {
    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
} else {

}

if (orderPieces === null) {
    message = CANCELED_BY_USER;
}

if (orderPieces === 10) {
    message = ACCESS_DENIED;
}

console.log(message);