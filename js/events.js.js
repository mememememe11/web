// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
'use strict';

    console.log(document.title);
    console.log(document.URL);

    // 1. 웹페이지 제목 변경

    document.title = '동적 웹페이지 만들기';
    // 2. dom 객체 가져오기
    // 크게 두 가지 방식이 있으나 쿼리셀럭터를 권장
    // document.getElement~~();
    // document.querySelector();

    //h1 제목을 변경 //get엘리먼트id로 헤딩상수값 가져옴
    //  let h1 =document.getElementById("heading");
    //  //변수 h1으로 설정한걸 이너넥스트로 변경 
    //  h1.innerText = "DOM Object & Event Handling"; 
 
    //쿼리셀럭터 방법 id는 #으로 불러오고 클래스는 . 으로 불러옴
    let h1 = document.querySelector("#heading");
    h1.innerText = "DOM object & Event Handling";
    
    // 3. 이벤트 처리
    // -이벤트란 선택, 클릭, 전송등의 특정사건임
    // -이벤트의 처리는 크게 3단계로 동작함
    // -targeting) 감시할 대상을 지정한 뒤,
    // -listening) 특정 이벤트를 지속적으로 감시,
    // -handling) 이벤트 발생하면 동작을 수행!

    let odb = document.querySelector("#order-bell");
    odb.addEventListener("click" , function(event) {
        alert('주문 하세요');
    });
    


    let dog = {
        name: "초코",
        bark: function() {
          console.log("멍멍!");
        }
      };
      
      dog.bark();  // 메서드 호출

      ////////////////////

      function greet(name) { // name = 파라미터
        console.log("안녕, " + name);
      }

      greet("동원"); // "동원" = 아규먼트



        let ans = document.querySelector("#answer-c");
        ans.addEventListener("change",function(event){

                      let select = event.target;

                    if(select.checked){

                               let blue = select.parentNode;
                               blue.classList.add("text-primary");
                    } else{
                                let blue = select.parentNode;
                                blue.classList.remove("text-primary");
                    }
        });



        let menucart =[];
        let list = document.querySelector("#order-list");

        let buttons = document.querySelectorAll("#practice-3 button");

        for(let i =0; i <buttons.length; i++){
        buttons[i].addEventListener("click", function(event){

            
            
               let bt = event.target;
               
                let btbt = bt.innerText;
                menucart.push(btbt);
               list.innerText = (`${menucart} 를 선택 하였습니다`);
             
        });
    }   
        

    

let btn = document.querySelector("#myBtn"); // 버튼 가져오기
let text = document.querySelector("#result"); // 문구가 들어갈 곳

btn.addEventListener("click", function() {
    text.innerText = "버튼이 클릭되었습니다!";
});

