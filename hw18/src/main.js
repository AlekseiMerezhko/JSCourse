/*
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов, 
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/


const solution = (arr) => {
	let words = arr[0].replace(/[,.!]/g, '').split(' ');
	let wordsLength = words.join('').length;
	let result = wordsLength / words.length;
	return words.filter(elem => elem.length > result)
};
console.log(solution(["This is a sample string"]));
console.log(solution(["Some another sample"]));
console.log(solution(["Do, do, do, do... do it!"])) ;









/* TASK 1
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/





const tbody = document.querySelector('tbody');
const td = [...document.querySelectorAll('td')];

tbody.addEventListener('click', (event) => {
  let otherSide = td.length - 1 - td.indexOf(event.target);
  td[otherSide].style.backgroundColor = 'green'
});

