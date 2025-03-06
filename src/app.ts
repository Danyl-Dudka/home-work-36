console.log('#19. TypeScript homework example file')

/*
 * #1
 * Задача: Розробити функцію `sumArray`, яка приймає масив чисел і повертає їх суму.
 */

function sumArray(numbers: number[]): number {
    return numbers.reduce((prevNum, currentNum) => prevNum + currentNum, 0);
}

// Вивід до консолі для демонстрації
console.log(sumArray([1, 2, 3, 4])) // Повинно вивести 10
console.log(sumArray([])) // Повинно вивести 0

/*
 * #2
 * Задача: Розробити функцію createUser, яка створює об'єкт користувача з заданими властивостями.
 */

type User = {
    name: string,
    age: number,
    isActive: boolean,
}

function createUser(name: string, age: number, isActive: boolean = true): User {
    let newUser: User = {name, age, isActive};
    return newUser;
}

const newUser = createUser('Анна', 25, true);
console.log(newUser)

/*
 * #3
 * Задача: Розробити функцію getOrderStatus, яка приймає статус замовлення як параметр і повертає рядок з описом статусу.
 */

enum OrderStatus {
    Pending = 'Замовлення очікує на обробку',
    Shipped = 'Замовлення було відправлено',
    Delivered = 'Замовлення доставлено',
    Cancelled = 'Замовлення скасовано',
}

function getOrderStatus(status: OrderStatus): string {
    if (Object.values(OrderStatus).includes(status)) {
        return status;
    } else {
        throw new Error ('Невідомий статус замовлення');
    }
}


// Приклад виклику функції
console.log(getOrderStatus(OrderStatus.Pending))
console.log(getOrderStatus(OrderStatus.Shipped))
console.log(getOrderStatus(OrderStatus.Delivered))
console.log(getOrderStatus(OrderStatus.Cancelled))