"use strict";
console.log('#19. TypeScript homework example file');
/*
 * #1
 * Задача: Розробити функцію `sumArray`, яка приймає масив чисел і повертає їх суму.
 */
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
// Вивід до консолі для демонстрації
console.log(sumArray([1, 2, 3, 4])); // Повинно вивести 10
console.log(sumArray([])); // Повинно вивести 0
function createUser(name, age, isActive = true) {
    let object = { name, age, isActive };
    return object;
}
const newUser = createUser('Анна', 25, false);
console.log(newUser);
/*
 * #3
 *
 * Задача: Розробити функцію getOrderStatus, яка приймає статус замовлення як параметр і повертає рядок з описом статусу.
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043E\u0447\u0456\u043A\u0443\u0454 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443";
    OrderStatus["Shipped"] = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0443\u043B\u043E \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E";
    OrderStatus["Delivered"] = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E";
    OrderStatus["Cancelled"] = "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(status) {
    if (status !== OrderStatus.Pending && status !== OrderStatus.Shipped && status !== OrderStatus.Delivered && status !== OrderStatus.Cancelled) {
        let error = "Невідомий статус замовлення";
        throw new Error(error);
    }
    else {
        return `${status}`;
    }
}
// Приклад виклику функції
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));
