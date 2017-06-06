/*
 * TASK 1
 * Напишите функцию которая будет вызываться трижды и складывать 
 * все передаваемые ей числа
 * */

 function add(x) {
    return function(x2){
        return function(x3){
            return x + x2 + x3;
        };
    };
 }
console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30



/*
 * TASK 2
 * Напишите функцию которая возвращает объект и одно из свойств объекта 
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 * */

 function patternModule() {
var number = 1

return obj = {
method: function() {
    return number++;
},
clean: function(){
    return number = 0;
}
}
};

let test = patternModule(); // 0
test.method(); //1
test.clean();
