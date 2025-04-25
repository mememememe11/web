//variable3.js
//연산자(+,-,/,*)
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1); // "30" -> 문자열로 3 0
num2 = parseInt(num2); // "17" -> 문자열로 1 7


let result = num1++ % --num2; 
/* "30" + "17" ="3017"; 47
parseint를 빼고 그냥 num1+num2 하면 문자열로 출력됌 parseint는
숫자로 변환해서 출력*/
console.log(result, num1,num2);
//result 값을 input#result의 value속성에 대입.
document.querySelector('#result').value = result;



