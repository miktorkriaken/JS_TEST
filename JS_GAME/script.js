'use strict';

// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// console.log(leftBorderWidth);

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name)

let money = +prompt("Ваш бюджет на месяц?($)", "150");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
let costs;
let expensive;

costs = prompt("Введите обязательную статью расходов в этом месяце", "Еда, коммунальные платежи")
expensive = +prompt("Во сколько обойдется?($)", "50")


let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        costs, 
        expensive    },
    optionalExpenses: undefined,
    income: undefined,
    savings: false
};

let moneyDay =(appData.moneyData - appData.expenses.expensive)/30;

let message = alert(" Дата: " + appData.timeData + " С учетом расходов на:" + appData.expenses.costs + " Бюджет на 1 день составляет: " + Math.round(moneyDay) + "$");