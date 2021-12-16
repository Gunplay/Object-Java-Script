// Пустой объект («пустой ящик») можно создать, используя один из двух вариантов синтаксиса:
//
//     let user = new Object(); // синтаксис "конструктор объекта"
// let user = {};  // синтаксис "литерал объекта"

// Литералы и свойства
// При использовании литерального синтаксиса {...} мы сразу можем поместить в объект несколько свойств в виде пар «ключ: значение»:
//
// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
// };

// Для обращения к свойствам используется запись «через точку»:
//
// // получаем свойства объекта:
// alert( user.name ); // John
// alert( user.age ); // 30

// Значение может быть любого типа. Давайте добавим свойство с логическим значением:
//
//     user.isAdmin = true;
//
// Для удаления свойства мы можем использовать оператор delete:
//
// delete user.age;
//
// Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
//
//     let user = {
//         name: "John",
//         age: 30,
//         "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
//     };



// Последнее свойство объекта может заканчиваться запятой:
//
//     let user = {
//         name: "John",
//         age: 30,
//     }
// Это называется «висячая запятая». Такой подход упрощает добавление, удаление и перемещение свойств, так как все строки объекта становятся одинаковыми.
//
//     Объект, объявленный как константа, может быть изменён
// Объект, объявленный через const, может быть изменён.
//
//     Например:
//
// const user = {
//     name: "John",
//     weight : 89,
// };
//
// user.name = "Pete"; // (*)
// user.weight = 110;
//
// alert(user.name); // Pete
// alert(user.weight);


// Может показаться, что строка (*) должна вызвать ошибку, но нет, здесь всё в порядке. Дело в том, что объявление const защищает от изменений только саму переменную user, а не её содержимое.
//
//     Определение const выдаст ошибку только если мы присвоим переменной другое значение: user=....
//
// Есть ещё один способ сделать константами свойства объекта, который мы рассмотрим в главе Флаги и дескрипторы свойств.



// это вызовет синтаксическую ошибку
//user.likes birds = true

// JavaScript видит, что мы обращаемся к свойству user.likes, а затем идёт непонятное слово birds. В итоге синтаксическая ошибка.
//
//     Точка требует, чтобы ключ был именован по правилам именования переменных. То есть не имел пробелов, не начинался с цифры и не содержал специальные символы, кроме $ и _.
//
//     Для таких случаев существует альтернативный способ доступа к свойствам через квадратные скобки. Такой способ сработает с любым именем свойства:

//     let user = {
//         'likes birds' : true,
//         'like fishing': 'Karas',
//     };
//
// // присваивание значения свойству
// //user["likes birds"] = true;
//
// // получение значения свойства
//
// alert(user["likes birds"]); // true
// alert(user['like fishing']);
// // удаление свойства
// delete user["likes birds"];
// delete user["likes fishing"];


// йчас всё в порядке. Обратите внимание, что строка в квадратных скобках заключена в кавычки (подойдёт любой тип кавычек).
//
// Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. Например, имя свойства может храниться в переменной:

//     let key = "likes birds";
//
// // то же самое, что и user["likes birds"] = true;
// user[key] = true;
// Здесь переменная key может быть вычислена во время выполнения кода или зависеть от пользовательского ввода. После этого мы используем её для доступа к свойству. Это даёт нам большую гибкость.
//
//     Пример:


// let user = {
//     name: "John",
//     age: 30,
//     work: "Java script",
// };
//
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
//
// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")
//
//
// Запись «через точку» такого не позволяет:

//     let user = {
//         name: "John",
//         age: 30
//     };
//
// let key = "name";
// alert( user.key ); // undefined

// Вычисляемые свойства
// Мы можем использовать квадратные скобки в литеральной нотации для создания вычисляемого свойства.
//
//     Пример:

// let fruit = prompt("Какой фрукт купить?", "apple");
//
// let bag = {
//     [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
//
// alert( bag.apple ); // 5, если fruit="apple"
// Смысл вычисляемого свойства прост: запись [fruit] означает, что имя свойства необходимо взять из переменной fruit.
//
//     И если посетитель введёт слово "apple", то в объекте bag теперь будет лежать свойство {apple: 5}.
//
// По сути, пример выше работает так же, как и следующий пример:

//     let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {};
//
// // имя свойства будет взято из переменной fruit
// bag[fruit] = 5;
// // …Но первый пример выглядит лаконичнее.
// //
// //     Мы можем использовать и более сложные выражения в квадратных скобках:
//
//     let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };
// // Квадратные скобки дают намного больше возможностей, чем запись через точку. Они позволяют использовать любые имена свойств и переменные, хотя и требуют более громоздких конструкций кода.
// //
// //     Подведём итог: в большинстве случаев, когда имена свойств известны и просты, используется запись через точку. Если же нам нужно что-то более сложное, то мы используем квадратные скобки.

// Мы можем использовать и более сложные выражения в квадратных скобках:

//     let fruit = 'apple';
//     let car = 'mazda';
//     let dom = 'My';
// let bag = {
//     [fruit + 'Computers']: 5, // bag.appleComputers = 5
//     [car + "Drive"] : "Speed",
//     dom : 'myHome',
//
// };
//
// alert(bag[fruit + 'Computers']);
// alert(bag[car + 'Drive']);
// alert(bag[dom]);

// // Квадратные скобки дают намного больше возможностей, чем запись через точку. Они позволяют использовать любые имена свойств и переменные, хотя и требуют более громоздких конструкций кода.
//
//     Подведём итог: в большинстве случаев, когда имена свойств известны и просты, используется запись через точку. Если же нам нужно что-то более сложное, то мы используем квадратные скобки.

// Цикл «for…in»
// Для перебора всех свойств объекта используется цикл for..in. Этот цикл отличается от изученного ранее цикла for(;;).

// Синтаксис:

    // for (key in object) {
    //     // тело цикла выполняется для каждого свойства объекта
    // }
//К примеру, давайте выведем все свойства объекта user:

//     let user = {
//         name: "John",
//         age: 30,
//         isAdmin: true,
//         isVova: 'Boss',
//     };
//
// for (let key in user) {
//     // ключи
//     alert( key );  // name, age, isAdmin
//     // значения ключей
//     alert( user[key] ); // John, 30, true
// }


// let codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания",
//     // ..,
//     "1": "США"
// };
//
// for (let code in codes) {
//     alert(code); // 1, 41, 44, 49
// }
//

// let nameCar = {
//     "13" : "Mazda",
//     "20" : "Bmw",
//     "100" : "Mersedes",
//     "111" : "Maclaren",
// };
//
// for (let name in nameCar) {
//     alert (name);
// }

// Целочисленные свойства? Это что?
//     Термин «целочисленное свойство» означает строку, которая может быть преобразована в целое число и обратно без изменений.
//
//     То есть, "49" – это целочисленное имя свойства, потому что если его преобразовать в целое число, а затем обратно в строку, то оно не изменится. А вот свойства "+49" или "1.2" таковыми не являются:

// Math.trunc - встроенная функция, которая удаляет десятичную часть
//     alert( String(Math.trunc(Number("49"))) ); // "49", то же самое ⇒ свойство целочисленное
// alert( String(Math.trunc(Number("+49"))) ); // "49", не то же самое, что "+49" ⇒ свойство не целочисленное
// alert( String(Math.trunc(Number("1.2"))) ); // "1", не то же самое, что "1.2" ⇒ свойство не целочисленное
//…С другой стороны, если ключи не целочисленные, то они перебираются в порядке создания, например:

/*let user = {
    name: "John",
    surname: "Smith"
};
user.age = 25; // добавим ещё одно свойство

// не целочисленные свойства перечислены в порядке создания
for (let prop in user) {
    alert( prop ); // name, surname, age
    alert(user[prop] ); //
}*/
// Таким образом, чтобы решить нашу проблему с телефонными кодами, мы можем схитрить, сделав коды не целочисленными свойствами. Добавления знака "+" перед каждым кодом будет достаточно.
//
//     Пример:

// let codes = {
//     "+49": "Германия",
//     "+41": "Швейцария",
//     "+44": "Великобритания",
//     // ..,
//     "+1": "США"
// };
//
// for (let code in codes) {
//     alert( +code ); // 49, 41, 44, 1
// }
// Теперь код работает так, как мы задумывали.