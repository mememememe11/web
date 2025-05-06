// object2.js
// 배열내장객체: newArray() 또는 []
// 관련메소드: push, pop, unshift, shift => forEach

let arr1 = [10, 20, 30]; //= new Array(); //[];
arr1[3] = 40;
arr1.push(50); //추가 메소드
arr1.unshift(60);
// 60이젤 앞 ,10, 20, 30, 40, 50
arr1.pop();// 60, 10, 20, 30, 40,
arr1.pop();// 60, 10, 20, 30 
arr1.shift();//10, 20, 30 
// 10, (15,) 20 , 30 
arr1.splice(1, 0, 15 , 16, 17); //추가할려면 0부터 넣고 뒤에 숫자 //추가,삭제,수정 가능

// every(every는 하나만 조건이 불만족이면 false 뜸), some (some은 하나라도 조건이 만족하면 사용가능)
let result = arr1.some (item => item % 2 == 1);
    console.log(result);

arr1.forEach(function(item, idx, ary) { //익명함수
    console.log(item, idx);


});




