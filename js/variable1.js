//variable1.js
// JS 주석문
        /*
            주석문:486p ~ 489p 읽기.
        */
        //데이터베이스 관리 시스템(DBMS) - 오라클.
        //정보 -> forntend -> backend -> oracle
        //변수(variable) - 데이터타입(문자,숫자,boolean,object,array,배열)
        let name; // 변수선언.
        name = "이창호"; // 값을 대입. (변수는 중복선언이 안된다) 
        let name1 = "홍길동";//변수초기화.
        name = "김민수";
        console.log(name);
        
         const age = 20; // 변수선언 & 초기화.
        // age = 30; // 30 할당.

        //선택자(selector)
       let item = document.querySelector('#uservalue');
       console.dir(item);
        name = item.value; // 변수 할당.
        console.log(name);