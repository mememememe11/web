// condition4exe.js
// 1 ~ 10 임의의 값을 생성하고.
// 생성값을 변수에 저장한 후 2의 배수 또는 3의 배수 또는 2,3의 배수가 아님.

 let result = 1 + Math.floor(Math.random() * 10 );
 console.log(result)



         if (result % 2 == 0) {
         console.log ("2의 배수");
         }  else if (result % 3 == 0) {
        console.log ('3의 배수');
        } else{
            console.log('2,3의 배수가 아님');
        }


        if (result % 2 == 0 && result % 3 == 0) {
            console.log ('2&3 의 배수');
        } else if (result % 2 == 0) {
            console.log ('2의 배수');
        }
         else if (result % 3 == 0) {
            console.log ('3의 배수');
         } else {
            console.log ('2,3의 배수가 아님');
         }
    