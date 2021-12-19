// Задачи
// Проверка синтаксиса
// важность: 2
// Каким будет результат выполнения этого кода?
// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
// };
//
// (user.go)();

// Объясните значение "this"
// важность: 3
// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
//
//     Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

//     let obj, method;
//
// obj = {
//     go: function() { alert(this); }
// };
//
// obj.go();               // (1) [object Object]
//
// (obj.go)();             // (2) [object Object]
//
// (method = obj.go)();    // (3) undefined
//
// (obj.go || obj.stop)(); // (4) undefined


// Использование "this" в литерале объекта
// важность: 5
// Здесь функция makeUser возвращает объект.
//
//     Каким будет результат при обращении к свойству объекта ref? Почему?

//     function makeUser() {
//         return {
//             name: "Джон",
//             ref() {
//                 return this;
//             }
//
//         };
//     };
//
// let user = makeUser();
//
// alert( user.ref().name ); // Каким будет результат?


// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:
//
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
    dev() {
        return this.a / this.b;
    },
    pow() {
        return this.a ** this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);

    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
alert( calculator.dev());
alert( calculator.pow());


// let one = prompt('Введите первое значиение', '');
// let two = prompt('Введите первое значиение', '');

