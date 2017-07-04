/*
TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*/





let solution = function(array){
  let uneven = {};
  let result = [];
  array.forEach(elem => {
    if (uneven[elem]) {
      uneven[elem] += 1;
    } else {
      uneven[elem] = 1;
    }
  });
  for (let key in uneven) {
    if (uneven[key] % 2) {
      result.push(key);
    }
  }
  return result;
};



console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));










// const someWebpackModule = `module.exports = {
//     context: %%HOMEDIR%,
//     entry: {
//         app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
//     },
//     output: {
//         path: %%HOMEDIR%% + '/app',
//         filename: "dist/[%%APPNAME%%].js",
//         library: '[%%APPNAME%%]'
//     }
//    }`;
/* TASK - 1
Распарсите строку и замените 
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */
// const myRegExp = (str, homeDir, appDir, appName) => {}

// myRegExp(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js')

const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;





/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/






/* 
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>, 
  вызывая методы объекта нужно создать dom-элементы
*/

// app.render();




class Dom {
  constructor() {
    this.name = "Тест по программированию";
    this.questions = [
      "Вопрос номер 1",
      "Вопрос номер 2",
      "Вопрос номер 3"
    ];
    this.answers = [
      ["Вариант №1", "Вариант №2", "Вариант №3"],
      ["Вариант №1", "Вариант №2", "Вариант №3"],
      ["Вариант №1", "Вариант №2", "Вариант №3"]
    ];
    this.buttonText = "Отправить";
  }

  h1() {
    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.textContent = this.name;
  }


   form(question, answer) {  
    const form = document.createElement("form");
    const ul = document.createElement("ul");
    form.appendChild(ul);
    for (let i = 1; i <= question; i++) {
      let p = document.createElement("p");
      p.textContent = this.questions[i-1];
      ul.appendChild(p);

      for (let b = 1; b <= answer; b++) {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        li.textContent = this.answers[i - 1][b - 1];
        li.appendChild(input);
        ul.appendChild(li)
      }
    }

    
    document.body.appendChild(form);
  }

  button() {
    const button = document.createElement("button");
    button.textContent = this.buttonText;
    document.body.appendChild(button);
  }

  render(question, answer) {
    this.h1();
    this.form(question, answer);
    this.button();
  }



}


let app = new Dom();

app.render(3, 3);