/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */
function minimalNumber(arr) {
    var minSum = 0;
    for (var i = 0; i < arr.length; i++) {
        var sumFixedStart = 0;
        for (var j = i; j < arr.length; j++) {
           sumFixedStart += arr[j];
           minSum = Math.min(minSum, sumFixedStart);      
        }
    }
 return minSum;
}
console.log(minimalNumber([-4,-10,25,10]));
/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(name){
    var arr = name.split(` `);
    var arr1 = arr.reverse().join(` `);
    console.log(arr1);
}
nameShuffler('john McClane');
nameShuffler('Arnold Schwarzenegger');
nameShuffler('James Bond');
/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */
 function capMe(arr){
    string = arr.join(` `)
    string1 = string.toLowerCase().split(` `);
    for (var i = 0; i < string1.length; i++) {
        string1[i] = string1[i].charAt(0).toUpperCase() + string1[i].slice(1);
      }
console.log(string1);
 }
capMe(['jo', 'nelson', 'jurie']);
capMe(['KARLY', 'DANIEL', 'KELSEY']);
//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8
 */





/*
 2. Напишите функция которая преобразовывает/открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 
 */

