//1
/*
 1. Напишите функцию которая принимает в
 качестве аргумента массив
 и добавляет элемент в конец массива
 */

let arr = [`Массивы`, `Функции`, `Замыкания`];
  
function addToArray(arrParam, newElem) {
    arr[3] = newElem;
    console.log(arrParam)
}
addToArray(arr, `Новый Элемент`)



//2

function simpleObjectGenerator(param1, param2, param3) {
    var myObj = {
      argument1: param1,
      argument2: param2,
      argument3: param3
    };
    return myObj;

}

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));

//3

var myName = {name : `Alex`};

function addNameToUser(newkey, newvalye, username) {
    var myObj = {
        argument1: newkey,
        argument2: newvalye,
        argument3: myName
    };
    var myObj2 = {
        newkey: newvalye
    };

     if(myObj2.name === undefined){
		 myObj2.name = "Alex"
	 }
     return myObj2;
}

console.log(addNameToUser('family', 'Merezhko', myName));

console.log(myName);
//4
/*
 -> @@ SUPER
 Напишите функцию, которая будет возвращать 'Fizz'
 если передаваемый параметр кратен 3,
 'Buzz', если передаваемый параметр кратен 5,
 'FizzBuzz' - если параметер кратен 3 и 5
 Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
 */


function fizzBuzz(num) {
  	if((num % 3 == 0) && (num % 5 == 0)) {
		console.log("FizzBuzz");
	}
	else if(num % 3 === 0){
		console.log("Fizz");
	}
	else if(num % 5 === 0){
		console.log("Buzz");
	}
	else if(num % 3 != 0 || num % 5 != 0){
		console.log(num);
	}
}

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'



/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента, 
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом

*/
function call(argument1, argument2, argument3, argument4){
    let arr = [];
    arr[0] = argument1;
    arr[1] = argument2;
    arr[2] = argument3;
    argument4(arr);
}
    call(`Первый`, `Второй`, `Третий`, function(argument4){
        console.log(argument4);
    });