// Тип данных Symbol
// По спецификации, в качестве ключей для свойств объекта могут использоваться только строки или символы. Ни числа, ни логические значения не подходят, разрешены только эти два типа данных.
//
//     До сих пор мы видели только строки. Теперь давайте разберём символы, увидим, что хорошего они нам дают.
//
//     Символы
// «Символ» представляет собой уникальный идентификатор.
//
//     Создаются новые символы с помощью функции Symbol():

// Создаём новый символ - id
// let id = Symbol();
// //При создании символу можно дать описание (также называемое имя), в основном использующееся для отладки кода:
//
// // Создаём символ id с описанием (именем) "id"
//     let id = Symbol("id");

//Например, вот два символа с одинаковым описанием – но они не равны:

//     let id1 = Symbol("id");
// let id2 = Symbol("id");
//
// alert(id1 == id2); // false
// //Если вы знаете Ruby или какой-то другой язык программирования, в котором есть своего рода «символы» – пожалуйста, будьте внимательны. Символы в JavaScript имеют свои особенности, и не стоит думать о них, как о символах в Ruby или в других языках.


// имволы не преобразуются автоматически в строки
// Большинство типов данных в JavaScript могут быть неявно преобразованы в строку. Например, функция alert принимает практически любое значение, автоматически преобразовывает его в строку, а затем выводит это значение, не сообщая об ошибке. Символы же особенные и не преобразуются автоматически.

 //   К примеру, alert ниже выдаст ошибку:

//     let id = Symbol("id");
// alert(id); // TypeError: Cannot convert a Symbol value to a string
// // Это – языковая «защита» от путаницы, ведь строки и символы – принципиально разные типы данных и не должны неконтролируемо преобразовываться друг в друга.
// //
//     Если же мы действительно хотим вывести символ с помощью alert, то необходимо явно преобразовать его с помощью метода .toString(), вот так:

//     let id = Symbol("id");
// alert(id.toString()); // Symbol(id), теперь работает
//Или мы можем обратиться к свойству symbol.description, чтобы вывести только описание:


//Или мы можем обратиться к свойству symbol.description, чтобы вывести только описание:

//     let id = Symbol("id");
// alert(id.description); // id


// «Скрытые» свойства
// Символы позволяют создавать «скрытые» свойства объектов, к которым нельзя нечаянно обратиться и перезаписать их из других частей программы.
//
//     Например, мы работаем с объектами user, которые принадлежат стороннему коду. Мы хотим добавить к ним идентификаторы.
//
//     Используем для этого символьный ключ:

//     let user = {
//         name: "Вася"
//     };
//
// let id = Symbol("id");
// let id1 = Symbol("id");
// user[id] = 1;
// user [id1] = 2;
// alert( user[id] ); // мы можем получить доступ к данным по ключу-символу
// alert (user[id1]);
// Почему же лучше использовать Symbol("id"), а не строку "id"?
//
//     Так как объект user принадлежит стороннему коду, и этот код также работает с ним, то нам не следует добавлять к нему какие-либо поля. Это небезопасно. Но к символу сложно нечаянно обратиться, сторонний код вряд ли его вообще увидит, и, скорее всего, добавление поля к объекту не вызовет никаких проблем.

//
// Кроме того, предположим, что другой скрипт для каких-то своих целей хочет записать собственный идентификатор в объект user. Этот скрипт может быть какой-то JavaScript-библиотекой, абсолютно не связанной с нашим скриптом.
//
//     Сторонний код может создать для этого свой символ Symbol("id"):

// ...
// let id = Symbol("id");
//
// user[id] = "Их идентификатор";

//А вот если бы мы использовали строку "id" вместо символа, то тогда был бы конфликт:
//
//     let user = { name: "Вася" };
//
// // Объявляем в нашем скрипте свойство "id"
// user.id = "Наш идентификатор";
//
// // ...другой скрипт тоже хочет свой идентификатор...
//
// user.id = "Их идентификатор";
// Ой! Свойство перезаписано сторонней библиотекой!

// Символы в литеральном объекте
// Если мы хотим использовать символ при литеральном объявлении объекта {...}, его необходимо заключить в квадратные скобки.
//
//     Вот так:
//
//     let id = Symbol("id");
//
// let user = {
//     name: "Вася",
//     [id]: 123 // просто "id: 123" не сработает
// };
// Это вызвано тем, что нам нужно использовать значение переменной id в качестве ключа, а не строку «id».
//
//Символы игнорируются циклом for…in
// Свойства, чьи ключи – символы, не перебираются циклом for..in.
//
// Например:
//
// let id = Symbol("id");
// let user = {
//   name: "Вася",
//   age: 30,
//   [id]: 123
// };
//
// for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)
//
// // хотя прямой доступ по символу работает
// alert( "Напрямую: " + user[id] );
// Это – часть общего принципа «сокрытия символьных свойств». Если другая библиотека или скрипт будут работать с нашим объектом, то при переборе они не получат ненароком наше символьное свойство. Object.keys(user) также игнорирует символы.


// А вот Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства:
//
//     let id = Symbol("id");
// let user = {
//     [id]: 123
// };
// let phone = {
//     [id]: "OnePlus",
// };
//
// let clone = Object.assign({}, user);
// let cloneOnePlus = Object.assign({}, phone);
// alert( cloneOnePlus[id] ); // 123
// Здесь нет никакого парадокса или противоречия. Так и задумано. Идея заключается в том, что, когда мы клонируем или объединяем объекты, мы обычно хотим скопировать все свойства (включая такие свойства с ключами-символами, как, например, id в примере выше).


// Глобальные символы
// Итак, как мы видели, обычно все символы уникальны, даже если их имена совпадают. Но иногда мы наоборот хотим, чтобы символы с одинаковыми именами были одной сущностью. Например, разные части нашего приложения хотят получить доступ к символу "id", подразумевая именно одно и то же свойство.
//
//     Для этого существует глобальный реестр символов. Мы можем создавать в нём символы и обращаться к ним позже, и при каждом обращении нам гарантированно будет возвращаться один и тот же символ.
//
//     Для чтения (или, при отсутствии, создания) символа из реестра используется вызов Symbol.for(key).
//
//     Он проверяет глобальный реестр и, при наличии в нём символа с именем key, возвращает его, иначе же создаётся новый символ Symbol(key) и записывается в реестр под ключом key.
//
//     Например:
//
// // читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for("id"); // если символа не существует, он будет создан
//
// // читаем его снова и записываем в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for("id");
//
// let idElse = Symbol.for("id");
// // проверяем -- это один и тот же символ
// alert( id === idAgain && id === idElse ); // true
// Символы, содержащиеся в реестре, называются глобальными символами. Если вам нужен символ, доступный везде в коде – используйте глобальные символы.

// Symbol.keyFor
// Для глобальных символов, кроме Symbol.for(key), который ищет символ по имени, существует обратный метод: Symbol.keyFor(sym), который, наоборот, принимает глобальный символ и возвращает его имя.
//
//     К примеру:
//
// // получаем символ по имени
//     let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
// let pow = Symbol.for("Number");
// // получаем имя по символу
// alert( Symbol.keyFor(sym) ); // name
// alert( Symbol.keyFor(sym2) ); // id
// alert( Symbol.keyFor(pow)); // Number
// Внутри метода Symbol.keyFor используется глобальный реестр символов для нахождения имени символа. Так что этот метод не будет работать для неглобальных символов. Если символ неглобальный, метод не сможет его найти и вернёт undefined.
//
//     Впрочем, для любых символов доступно свойство description.
//
//     Например:

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");


alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

alert( localSymbol.description ); // name

