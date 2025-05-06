

            // sum = 0;
            // for (let i=0; i<=20; i++){
            //     sum = sum + i;
            // }   console.log(sum);


            // let sum = 0;

            // for (let i=1; i<=20; i++){
            //     if( i % 2 == 0){
            //         sum = sum+i;
            //     }
            // }       console.log(sum);

            //for2.js
            // 1 ~ 10까지 반복
            // 2의 배수 , 3의 배수 => 2의 배수는 sum2 저장
            //                       3의 배수는 sum3 저장
                            
        
            
        //    sum2 = 0;
        //    sum3 = 0;

        //    for ( let i =0; i<=10; i++){
        //         if( i % 2 == 0){sum2=sum2+i}
        //        if( i % 3 == 0){sum3=sum3+i}
        //    }
        //     console.log(sum2);
        //     console.log(sum3);

         // 1 ~ 20 반복 => 짝수인 경우 합을 구하고 싶음.
  ;

        //  sum = 0;
        //  for (let i=0; i<=20; i++){
        //      if(i % 2 ==0){ sum = sum+i; }
        //      } console.log("20까지 짝수의 합은" + sum);
        // let inNum1 = parseInt(prompt("첫 번째 숫자를 입력하세요."));

        // // 두 번째 숫자 입력
        // let inNum2 = parseInt(prompt("두 번째 숫자를 입력하세요."));
        
        // // 둘 중 큰 값, 작은 값 계산
        // let numMax = inNum1 > inNum2 ? inNum1 : inNum2;
        // let numMin = inNum1 < inNum2 ? inNum1 : inNum2;
        
        // // 결과 출력
        // if (inNum1 === inNum2) {
        //     console.log("두 수는 같습니다.");
        // } else {
        //     console.log(`두 수 중에서 큰 값은 ${numMax} 입니다.`);
        //     console.log(`두 수 중에서 작은 값은 ${numMin} 입니다.`);
        // }





       


        let inNum1 = parseInt(prompt("첫 번째 숫자를 입력하세요"));
        let inNum2 = parseInt(prompt("두 번째 숫자를 입력하세요"));
        
        console.log(inNum1);
        console.log(inNum2);
        
        if (inNum1 === inNum2) {
            console.log("두 수는 같습니다.");
        } else {
            let numMax = inNum1 > inNum2 ? inNum1 : inNum2;
            let numMin = inNum1 < inNum2 ? inNum1 : inNum2;
        
            console.log(`두 수 중에서 큰 값은 ${numMax} 입니다.`);
            console.log(`두 수 중에서 작은 값은 ${numMin} 입니다.`);
        }
