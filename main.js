/*Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.*/
/*
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

const numbers = [1, 2, 3, 5, 7, 10, 19, 17, 23, 16, 9];
const primeNumbers = [];

numbers.forEach(number => {
    if (isPrime(number)) {
        primeNumbers.push(number);
    }
});

console.log(primeNumbers); */





/*Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля source / text / date. 
Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.*/

/*
const notifications = [
    {source: "youtube", text: "Someone liked your video!", date: "06.08.2024"},
    {source: "youtube", text: "This avtor posted new video today", date: "02.09.2024"},
    {source: "youtube", text: "You have new comment", date: "23.08.2024"},
    {source: "telegram", text: "You have one new message", date: "03.09.2024"},
    {source: "telegram", text: "One new subscriber on your chanell", date: "28.08.2024"},
    {source: "instagram", text: "New like on your post!", date: "01.09.2024"},
    {source: "instagram", text: "Let`s post new photo!", date: "19.08.2024"}
];

const sortedNotifications = {};

notifications.forEach(notification => {
    const { source } = notification;
    if (!sortedNotifications[source]) {
        sortedNotifications[source] = [];
    }
    sortedNotifications[source].push(notification);
});

console.log(sortedNotifications);

//Або можна просто застосувати groupBy, внизу написала застосування цього методу для вирішення завдання:
//const sortedNotifications = Object.groupBy(notifications, item => item.source);
//console.log(sortedNotifications);


*/


/*Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву groupBy*/

/*
const students = [
    {name: "Oleksandra", age: "26", email: "oleksandra@gmail.com", group: 3},
    {name: "Petro", age: "28", email: "petro@gmail.com", group: 1},
    {name: "Oleh", age: "25", email: "oleh@gmail.com", group: 1},
    {name: "Oleksiy", age: "22", email: "oleksiy@gmail.com", group: 2},
    {name: "Valentina", age: "20", email: "valentina@gmail.com", group: 2},
    {name: "Andriy", age: "27", email: "andriy@gmail.com", group: 2},
    {name: "Olena", age: "21", email: "olena@gmail.com", group: 3},
    {name: "Maksim", age: "26", email: "maksim@gmail.com", group: 3}
];

function groupBy(arr, func){
    const result = {};
    arr.forEach(item => {
        const key = func(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    });
    return result;
}

const sortedStudents = groupBy(students, item => item.group);
console.log(sortedStudents);
*/