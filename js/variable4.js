// variable4.js
// 연산자(할당연산자 524p)

// let num1 = "10"; //(10이란 변수값을 num1에 담는다)
num1 = num1 + "20"; // "1020"
num1 = num1 + "30"; // "102030"
console.log(num1);

num1 += "40"; // num1 = num1 + "40";

let num2 = 10; // number
num2 += 20;
num2 += 3
num2 = num2 - 5; //55
num2 -= 5; // 50

num2 = num2 *2;
num2 *=2 // 200
num2 = 10203040;

console.log(num2 == num1); // 동일
console.log(num2 == num1); // 다름

console.log(num != num1); //값만 비교
console.log(num !== num1); // 값, 타입

//논리연산자.
console.clear();
console.log(num1 >=num2 || num1 < 100);
console.log(num1 >= num2 && !(num1 < 100));
