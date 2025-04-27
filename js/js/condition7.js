//주말 과제

// let result = 30 + Math.floor(Math.random() * 71); // 0 <- x < 71
// console.log(result);
// 100 ~ 90 -> "A"
// ~80 -> "B"
// ~70 -> "C"
// ~60 -> "D" 그외 "F"

// if (result >= 90) {
//   console.log ("A");
//   }else if (result >= 80){
//   console.log ("B") ;
//   }else if (result >= 70){
//   console.log ("C") ;
//   }else if (result >= 60){
//   console.log ("D") ;
//   }else {
//    console.log("F");
//   }  


// let result = 30 + Math.floor(Math.random() * 71); // 0 <- x < 71
// / console.log(result);

// / if (result >= 95) {
// /     console.log ("A+ 입니다");
// /     }else if (result >= 85){
// /     console.log ("A 입니다") ;
// /     }else if (result >= 75){
// /     console.log ("B 입니다") ;
// /     }else if (result >= 65){
// /     console.log ("C 입니다") ;
// /     }
// /     else if (result >= 60) {
// //     console.log ("D입니다");
//     }
    
//     else {
//      console.log("F 입니다");
//     }  

    //    변수=let 상수=const 
    //    변수 재할당 안됌
    //    초기화 하고 다시 선언
    //    ex ) let="동원" 동원="참치" x
    //         let="동원" let="참치" o 
        
    //         상수부터 사용하는게 좋음 관례적

    //         var 는 재할당에 제한이없어서 옛날 js에서 사용했던 것
    //         문제가 많아 let이 생김
        
            // const age = 20;
            // const job = "개발자";

            // let msg = "저는" + job + "이고" + age + "살 입니다";
            
            // console.log(msg);
            
            // const age = 20;
            // const job = "개발자";

            // const msg2 = '저는 ${age}, 이고 직업은 ${job} 입니다';
            // console.log(msg2);


            // 객체 데이터타입: 여러타입을 가진 데이터의 집합 키와 값으로 구성
            // 키와 값의 쌍을 프로포티 라고 함

            //  let obj = {
            //     name: "김동원",
            //     age: "34",
            //     weight: "돼지",
            // };
            //     console.log(obj.age); 점 표기법
            //     console.log(obj["name"]); 대괄호표기법

                //일반적인 상황에서는 점 표기법을 사용한다

            //배열과 문자는 외부에 중첩시킬수 있다
            
            //  const arr = [1,2,3,[4,5]];
            // const arr2 = [1,2,3,{name:"김동원"}];
            // console.log(arr2);


            // const obj = {
            //     arr:[1,2,3],
            //     somthing: {
            //         name: "김동원",
            //     },

            // };
            // console.log(obj);

            // 자바스크립트 연산자 종류 :크게 8가지 
            
            // + - / * 

            // 모듈러 : 나머지 연산자 / 나머지값을 결과값으로 출력
            // ex) 10/ 5 = 2 (몫) / 10 % 5 = 0 (나머지값 결과값으로 출력)   
            // ** (지수연산자): 거듭제곱 연산수행
            
            // console.log(10 % 3);
            // console.log(2**3); = 8 출력
            
            // 증감 연산자
            // ++ 연달아사용하면 1이 증가
            // -- 연달아사용하면 1이 감소

            // let number=10;

            // number++;
            // console.log(number);

            // a =123 이고 b="1 2 3" 일때
            // a==b 결과는 true (추상비교)
            // a===b 결과는 false (엄격비교)

            // 등호를 세번 쓰는게 양변의 값에 파이까지 비교하기때문에
            // 일반적으로 등호 세번 쓰는게 보편적

            // !== 양변이 같은지 같지않은지 비교함 같지않으면 true 로 출력

            //  논리 연산자

            //  && 양변의 값이 모두 true 일 경우에만 true가 됌
            //  || 둘 중 하나만 true 만 되어도 ture가 됌
            //  !  

            // const a = 2<3;
            // const b = 30>50;

            //  console.log(a&&b); //= b가 틀렸으므로 false 가 출력됌

            // console.log(a||b); //= a가 ture 이므로 true 가 출력됌

            //  (!a) // = 피연산자 앞에 !을 붙일경우 피연산자의 값을 부정한다
             
            //  a앞에 ! 붙이면 false가 된다

            //삼항연산자
            // 조건의결과가 참인지 거짓인지에 따라 다른 실행결과 를 가진
            //연산을 수행한다 세개의 피연산자를 가진다

            //  삼항연산자 : 조건 / ? / 참일 때 실행될 부분 : 거짓일 때 실행될 부분

            // console.log(2 > 3 ? '참':'거짓');

            //복합대입 연산자
            // +=
            // -=
            // *=
            // /=
            // %=
            // **=
             //널리쉬 연산자
            // 새롭게 추가된 연산자
            // 여러개의 피연산자 중
            // 값이 확정되어 있는 변수를 찾음
            
            // const a = undefined;
            // const b = null ;
            // const c = "김동원";

            // console.log(a ?? b?? c);   (화면에 김동원 출력)


            // let number = 10;

            //(number = number +2;)  --->  number += 2; 

            // number %=2; ---> (number = number % 2;)

            // 전개구문 전개연산자

                    const ad = 10;
                    const b = 20;

                    console.log(ad); 














       