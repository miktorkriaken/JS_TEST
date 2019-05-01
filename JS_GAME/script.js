'use strict';

//      Version 1   //

// let money = +prompt("Ваш бюджет на месяц?($)", "150");
// let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
// let costs;
// let expensive;

// costs = prompt("Введите обязательную статью расходов в этом месяце", "Еда, коммунальные платежи")
// expensive = +prompt("Во сколько обойдется?($)", "50")


// let appData = {
//     moneyData: money,
//     timeData: time,
//     expenses: {
//         costs, 
//         expensive    },
//     optionalExpenses: undefined,
//     income: undefined,
//     savings: false
// };

// let moneyDay =(appData.moneyData - appData.expenses.expensive)/30;

// let message = alert(" Дата: " + appData.timeData + " С учетом расходов на:" + appData.expenses.costs + " Бюджет на 1 день составляет: " + Math.round(moneyDay) + "$");

//      Version 2    //

// let money = prompt("Ваш бюджет на месяц?($)", ""),
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeData: time,
//     savings: false
// };
// let a1 = prompt("Введите обязательную статью расходов в этом месяце", "Еда, коммунальные платежи"),
//     a2 = prompt("Во сколько обойдется?($)", "50"),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце", "Еда, коммунальные платежи"),
//     a4 = prompt("Во сколько обойдется?($)", "50");

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// alert(Math.round(appData.budget / 30));

//      Version 3 (cycle for)    //

let money = prompt("Ваш бюджет на месяц?($)", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?($)", "");

    if ( (typeof(a)) === "string" && typeof(b) === "number" && (typeof(a)) != null
        && (typeof(b)) != null && a != " " && b != " " && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i = 0;
    }
};

alert(Math.round(appData.budget / 30));