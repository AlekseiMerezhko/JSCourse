/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/

// 1) DRY

// DO not reapeat yourself;

// 2) Вы должны учесть все возможные варианты

const solution = (str) => {
 const symbol = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < symbol.length; i++) {
    regExp = new RegExp(symbol[i]);
    if (!regExp.test(str)) return false;
  }
  return true;
};

console.log(solution("wyyga")) // false
console.log(solution("qwertyuioplkjhgfdsazxcvbnm")) // true
console.log(solution("ejuxggfsts")) // false
console.log(solution("qpwoeirutyalskdjfhgmznxbcv")) // true
console.log(solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv")) // true
console.log(solution("0123456789abcdefghijklmnop")) // false









/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
 */








/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/


class HTML{
  constructor(){
    this.tableHeader = ["Name", "Surname", "Email"];
    this.contacts = [
      { name: "Иван", lastName: "Петров", email: "IvanPetrov@ec.ua" },
      { name: "Сергей", lastName: "Сергеев", email: "SergeiSergeev@ec.ua" },
      { name: "Иван", lastName: "Иванов", email: "IvanIvanov@ec.ua" },
      { name: "Александр", lastName: "Александров", email: "AlexAlex@ec.ua" },
      { name: "Алекс", lastName: "Смирнов", email: "AlexSmirnov@ec.ua" },
      { name: "Сергей", lastName: "Волков", email: "VolkovSergey@ec.ua" },
      { name: "Мария", lastName: "Шарапова", email: "MariyaSharapova@ec.ua" },
      { name: "Александр", lastName: "Винник", email: "AlexVinnik@ec.ua" },
      { name: "Дарий", lastName: "Смирнов", email: "DariySmirnov@ec.ua" },
      { name: "Елена", lastName: "Лещенко", email: "ElenaLeshenko@ec.ua" },
      { name: "Ольга", lastName: "Новикова", email: "OlgaNovikova@ec.ua" },
      { name: "Наталья", lastName: "Шемякина", email: "ShemyakinaN@ec.ua" },
      { name: "Анна", lastName: "Донцова", email: "AnnaDontsova@ec.ua" }
    ];
  }


  
}