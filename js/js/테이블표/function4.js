//function4.js
//함수 + 반복문 + 배열
// let num = 10; 
// num = "10, 홍길동";
// let numAry = [10, 20]; //new array();
// numAry[2]=30;            //index 값은 0부터 시작 = numAry[0]
// numAry[3]=50;
// numAry[4]="hong"; // (웬만하면 사용x)
// numAry[4]=70;
// numAry[5]=90;
// numAry[6]=110;


// console.log(numAry[4]);
// console.log(`배열의 크기: ${numAry.length}`);

// //배열 + for반복문 같이쓰면 좋다

// for(let i =0; i < numAry.length i++){
//     console.log(`[i]의 값 : $[i],배열의 값 : ${numAry[i]}`)
// }
// //연산가능
// console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry[2]}`);

//배열의 요소의 합
// let sum = 0;
// for (let i = 0; i<numAry.length; i++){
//     //1,3,5,7번째.
//     //if(i % 2 == 0)
//      //값중에서 50보다 큰값을 담고싶을경우   
//     if (numAry[i] > 50)
//     sum = sum+numAry[i];
// }  
// console.log(`sum=>$[sum]`); // 배열변수: ages 27,28,25,30,31,36
  //max(초기값 :36) => 36이 제일 많은 나이입니다
//  let numAry = [10];
//  numAry[1]=27;
//  numAry[2]=28;
//  numAry[3]=25;
//  numAry[4]=30;
//  numAry[5]=31;
//  numAry[5]=36;

//         let sum =0;
//         for (let i = 0; i<numAry.length; i++){
//             if ( numAry[i]>31)
//                     sum = sum+numAry[i];       
//         }       console.log=(i);



        // let ages = [27, 28, 25 ,30, 31,36];
        // let max = 0;
        // for (let i = 0; i < ages.length; i++){
        //     if (max < ages[i]){ // 현재 max값보다 더 큰요소가 있다면
        //         max = ages[i]; // max의 변수에 할당
        //     }
        // }  console.log(`${max}이 제일 많은 나이입니다.`);

        let ages = [27, 28, 25 ,30, 31,36];

    //함수 : getMax()
    function getMax(param1 = []){
        let max = 0;
        for (let i = 0; i < param1.length; i++){
            if (max < param1[i]){ // 현재 max값보다 더 큰요소가 있다면
                max = param1[i]; // max의 변수에 할당
            }
        }  console.log(`${max}이 제일 많은 나이입니다.`);
    }
    //함수실행
        getMax(ages);
        getMax([30,17,22,34,27]);
    // 함수 getMinValue(매개값으로 배열) 제일 작은값을 반환;


    //     let result = getMinValue([20, 27, 17, 30]);
    //     function getMin(baram1 =[]){
    //         let min = 0;
    //         for (let i = 0; i < baram1.length; i++){
    //     }  if (min > baram1[i]){
    //            min = baram1[i]; 
    //     }
    //     }

    // console.log(`${result}이 제일 적은 나이입니다`);
    


        


        // 함수 getMinValue(매개값으로 배열) 제일 작은값을 반환
        // 교수님 답안
    //     let result = getMinValue([20, 27, 17, 30]);
    // function getMinValue(param1 =[]){
    //     let min = param1[0]; // 최소값 지정
    //     for (let i = 0; i<param1.length; i++){
    //         if (min > param1[i]){
    //             min = param1[i];
    //         }
    //     }
    // }          
    //      return min; //반환
    //     console.log($[result]);
        