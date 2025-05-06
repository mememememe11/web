// object3.js
// indexOf()

let numArr = [10, 21, 33, 54, 16, 73]
let result = numArr.indexOf(333); // -1은 찾는 요소가 없음
console.log(result);

let strAry = ["홍길동", "김길동", "홍길순"];
strAry.forEach(function (item) {
    if (item.indexOf("홍") == 0) {
        console.log(item);
    }     
});


//numAry(변수) => 10 ~ 50 사이의 값을 10개 저장 => 콘솔에 출력(forEach);

   let numAry = []; //변수 선언
   for (let i =1; i<=10; i++){
    let no = Math.floor(Math.random() * 41) + 10; 
    numAry.push(no); //배열에 추가 = "push"         //item	현재 반복 중인 배열 요소 값 배열의개수만큼 가리키면서 반복
                                                   // idx	현재 요소의 인덱스 (위치)
                                                    // ary	전체 원본 배열 (numAry) 자체

   }
    // numAry = [10, 20, 60]
    // 10 ~ 50 사이의 값이 정상적으로 생성 체크 : every()
    result = numAry.every(function(item){
        return item >= 10 && item <= 50            
    })    
        console.log(result);



    numAry.forEach(function (item) {
        console.log(item);
        
    })



    //또 다른 예

     // 10 ~ 50 사이의 값이 정상적으로 생성 체크 : every()
    //  result = numAry.every(item => item >= 10 && item <= 50);           
    //     console.log(result);

    //   //
      
    //   result = numAry.every(function (item)) {
    //     if (item >= 10 && item <=50){
    //         return true;
    //     }   else{
    //         return false;
    //     }
    //   }
    //   console.log(result);

