// let user = {
//     "1": "Vova",
// };
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// //delete user.name;
//
// alert(user.name);
// alert(user[1]);

// Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

//     let schedule = {
//         //"1": "React", false
//     };
//
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false
//
//
// function isEmpty(obj) {
//     for (let key in obj){
//         return false;
//     }
//
//     return true;
//
// }
//

//Объекты-константы?
// важность: 5
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const user = {
//     name: "John"
// };
//
// // это будет работать?
// user.name = "Pete";
// // Ошибка
// user = 123;
// alert(user.name);

// умма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:


//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130,
//         Vova: 300,
//     };
//
// let sum = 0;
//
// for (let key in salaries) {
//     sum += salaries[key];
// }
// alert(sum);


// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//
// Например:

// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// let str = (obj) => {
//     for (let key in obj) {
//         if (typeof obj[menu.key] == 'number') {
//             obj[menu.key] *= 2;
//
//         }
//
//     }
//    alert( str(obj));
// };

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    age: 25,
    game: {
        game1: "wow",
        game2: "lineage",
        game3: 2,
    },
};
 function multiplyNumeric(obj) {

  for ( let key in obj) {
      if (typeof obj[key] == 'number') {
          alert( key + " : " + obj[key] * 2 );
      }
      else if (obj[key] == "string"){
          console.log( key + " : " + menu.game.game1(obj[key]));
      }
      else {
          alert(key + " : " + obj[key] * 2 );
      }
  }

 }
(multiplyNumeric(menu));










//     //console.log("menu = {");
//     for (let key in obj) {
//         if (typeof obj[key] == "number") {
//             console.log (key + " : " + obj[key] * 2);
//         }
//
//
//         else
//             console.log (key + " : " + obj[key])
//     }
//
//     //console.log("};");
// }
//
// (multiplyNumeric(menu));



// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//             return key;
//
//         }

//     }
//
// }


// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };


// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.