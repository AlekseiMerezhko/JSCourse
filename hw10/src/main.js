/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
  let y = 5;
  t();
};
console.log(y);

z(x);

//  ------------>>>>>>   Функция z(x) вернет undefined т.к. функция t => ничего не возвращает

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

let $ = function(html) {
    return `<${html}></${html}>`
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>
/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQuery = {
  array : [],
  
  add : function(tag, info) {
    let newtag = `<${tag}></${tag}>`;

    if(this.string) {
      let lastTag = this.array[this.array.length - 1];
      let middle = this.string.indexOf(lastTag) + (lastTag.lastIndexOf('</'));
      if (info) {
        newtag = `<${tag}>${info}</${tag}>`
      }
      this.string = this.string.slice(0, middle) + newtag + this.string.slice( middle );
    } 
    else {
     this.string = newtag;
    };
    this.array.push(newtag);
    return this;
  },
  


  render : function() {
    let tags = this.string;
    this.string = ``;
    return tags 
  }
};

ezjQuery.add('body') //<body></body> 
ezjQuery.add('div') //<body></body><div></div>
ezjQuery.add('h1'); //<body></body><div></div><h1></h1>


console.log(ezjQuery.render());
/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 --- 
 * И добавьте объекту ezjQuery метод render, который будет возвращать 
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */





// // example
 var helloList = ezjQuery
   .add('body') // <body></body>
   .add('div') // <body><div></div></body>
   .add('ul') // <body><div><ul></ul></div></body>
   .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
   .render();
    console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// //  Обратите внимание, что после вызова render создание строки началось сначала

 var bodyDiv = ezjQuery
   .add('body') //<body></body>
   .add('div') //<body><div></div></body>
   .render();
 console.log(bodyDiv); //<body><div></div></body>

// Для выполнивших все задания

document.write(helloList)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
