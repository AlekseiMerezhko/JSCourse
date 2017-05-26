//EX1
/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */


 function numbersBetween(a, b) {
    var number = [];
    var c = (a > b) ? b : a;
    var d = (a < b) ? b : a;
    var e = 0;
    for(var f=c+1;f<d;)
        number[e++] = f++;
        return number;
 }

 console.log(numbersBetween(1, 5)); // 2,3,4
 console.log(numbersBetween(3, 6)); // 4,5
 console.log(numbersBetween(12, 15)); // 13,14
 console.log(numbersBetween(10, 15)); // 11, 12, 13, 14






//EX2
/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
 Расчет чисел должен идти до 100 
 */

  for (let i = 0; i < 100; i = i + 1) {
    if((i % 3 == 0) && (i % 5 == 0)) {
 		    console.log("FizzBuzz");
 	    }
 	    else if(i % 3 === 0){
 		    console.log("Fizz");
 	    }
 	    else if(i % 5 === 0){
 		    console.log("Buzz");
 	    }
 	    else if(i % 3 != 0 || i % 5 != 0){
 		    console.log(i);
 	    } 
  }




//EX3
/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

  let arr = [1, null, undefined, 'str', {}, [], function() {}];

  function solution(qwerty) {
     const myArr = [];
      for (var i = 0; i < qwerty.length; i++) {
          var element = qwerty[i];
          myArr.push(typeof element); 
      }
      return myArr;

   }
   console.log(solution(arr));