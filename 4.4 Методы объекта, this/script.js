//method object - this

// Примеры методов
// Для начала давайте научим нашего пользователя user здороваться:

//     let user = {
//         name: "Джон",
//         age: 30
//     };
//
//
// user.hello = () => alert("Hello!");
//
// user.hello();
// user.sayHi = function() {
//     alert("Привет!");
// };
//
// user.sayHi(); // Привет!

// let user = {
//     // ...
// };
//
// // сначала объявляем
// function hello() {
//     alert("Hello!");
// }
// user.hello = hello;
// user.hello();

// function sayHi() {
//     alert("Привет!");
// }
//
// // затем добавляем в качестве метода
// user.sayHi = sayHi;
//
// user.sayHi(); // Привет!


// Сокращённая запись метода
// Существует более короткий синтаксис для методов в литерале объекта:

// эти объекты делают одно и то же (одинаковые методы)
//
//     user = {
//         sayHi: function() {
//             alert("Привет");
//         }
//     };

// сокращённая запись выглядит лучше, не так ли?
// user = {
//     sayHi() { // то же самое, что и "sayHi: function()"
//         alert("Привет");
//     },
//     goodbye() {
//         alert("Пока");
//     }
// };
// user.sayHi();
// user.goodbye();
// Как было показано, мы можем пропустить ключевое слово "function" и просто написать sayHi().
//
//     Нужно отметить, что эти две записи не полностью эквивалентны. Есть тонкие различия, связанные с наследованием объектов (что будет рассмотрено позже), но на данном этапе изучения это неважно. В большинстве случаев сокращённый синтаксис предпочтителен.


// Ключевое слово «this» в методах
// Как правило, методу объекта необходим доступ к информации, которая хранится в объекте, чтобы выполнить с ней какие-либо действия (в соответствии с назначением метода).
//
// Например, коду внутри user.sayHi() может понадобиться имя пользователя, которое хранится в объекте user.
//
//     Для доступа к информации внутри объекта метод может использовать ключевое слово this.
//
//     Значение this – это объект «перед точкой», который использовался для вызова метода.
//
//     Например:
//
// let user = {
//     name: "Джон",
//     age: 30,
//
//     sayHi() {
//         // this - это "текущий объект"
//         alert(this.name);
//     },
//     age1() {
//         alert(this.age);
//     }
//
// };
//
// user.sayHi(); // Джон
// user.age1();
// Здесь во время выполнения кода user.sayHi() значением this будет являться user (ссылка на объект user).
//
// Технически также возможно получить доступ к объекту без ключевого слова this, ссылаясь на него через внешнюю переменную (в которой хранится ссылка на этот объект):

// let user = {
//     name: "Джон",
//     age: 30,
//
//     sayHi() {
//         alert(user.name); // используем переменную "user" вместо ключевого слова "this"
//     }
//
// };

//Но такой код будет ненадёжным. Если мы решим скопировать ссылку на объект user в другую переменную, например, admin = user, и перезапишем переменную user чем-то другим, тогда будет осуществлён доступ к неправильному объекту при вызове метода из admin.

  //  Это показано ниже:

//     let user = {
//         name: "Джон",
//         age: 30,
//
//         sayHi() {
//             alert( user.name ); // приведёт к ошибке
//         }
//
//     };
//
//
// let admin = user;
// user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
//
// admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!
//Если мы используем this.name вместо user.name внутри alert, тогда этот код будет работать.

//«this» не является фиксированным



// В JavaScript ключевое слово «this» ведёт себя иначе, чем в большинстве других языков программирования. Оно может использоваться в любой функции.
//
//     В этом коде нет синтаксической ошибки:

    // function sayHi() {
    //     alert( this.name );
    // }
// Значение this вычисляется во время выполнения кода и зависит от контекста.
//
//     Например, здесь одна и та же функция назначена двум разным объектам и имеет различное значение «this» при вызовах:

//     let user = { name: "Джон" };
// let admin = { name: "Админ" };
// let boss = { name: "Vova"};
// function sayHi() {
//     alert( this.name );
// }
// function goodNight() {
//     alert ('Пока')
// }
// goodNight();
// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;
// boss.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)
// boss.f();
//
//
//
//
// admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)
//Правило простое: при вызове obj.f() значение this внутри f равно obj. Так что, в приведённом примере это user или admin.


// Вызов без объекта: this == undefined
// Мы даже можем вызвать функцию вовсе без использования объекта:
// 'use strict';
//     function sayHi() {
//         alert(this);
//     }
//
// sayHi(); // undefined
// В строгом режиме ("use strict") в таком коде значением this будет являться undefined. Если мы попытаемся получить доступ к name, используя this.name – это вызовет ошибку.
//
//     В нестрогом режиме значением this в таком случае будет глобальный объект (window для браузера, мы вернёмся к этому позже в главе Глобальный объект). Это – исторически сложившееся поведение this, которое исправляется использованием строгого режима ("use strict").
//
//     Обычно подобный вызов является ошибкой программирования. Если внутри функции используется this, тогда ожидается, что она будет вызываться в контексте какого-либо объекта.
//

// let user = {
//     name: "Джон",
//     hi() { alert(this.name); },
//     age: "23",
//     howOld() { alert(this.age)},
// };
//
// // разделим получение метода объекта и его вызов в разных строках
// let hi = user.hi;
// let howOld = user.howOld;
// user.hi();
// user.howOld();
// //hi(); // Ошибка, потому что значением this является undefined
//


// У стрелочных функций нет «this»
// Стрелочные функции особенные: у них нет своего «собственного» this. Если мы используем this внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.
//
//     Например, здесь arrow() использует значение this из внешнего метода user.sayHi():

// let user = {
//     firstName: "Илья",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     },
//     lastName: "Vova",
//     goodBy() {
//         let arrow = () => alert(this.lastName);
//         arrow();
//     }
// };
//
// user.sayHi(); // Илья
// user.goodBy(); //
//Это является особенностью стрелочных функций. Они полезны, когда мы на самом деле не хотим иметь отдельное значение this, а хотим брать его из внешнего контекста. Позднее в главе Повторяем стрелочные функции мы увидим больше примеров на эту тему.
