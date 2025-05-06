// function7.js
// console.log(friends);

// //함수: makeRow(friend={})

//     let friend ={
//         name: "김민규",
//         age: 20,
//         phone: "010-1111-2222"
//     }
//     // for .. in => 객체의 속성반복..
//     for (let prop in friend) {
//         console.log(`prop: ${prop}, val: ${friend[prop]}`);
//     }


// function makeRow(friend ={name,age,phone}){
//       let str="";
//       str += "<tr>"
//       str += "<th>"
//       for (let a in friend){
//         str += `<td>${friend[a]}</td>`;
//       }
//       str += `<td>${friend.name}</td><td>${friend.age}</td><td>${friend.phone}</td>`;
//       str += "</tr>";
//       return str;    
//     }
//     //출력
//     let titles = ["이름", "나이", "연락처"];
//     let tlist ="";
//     tlist += "<table class='table'>";
//     tlist += "<tbody>";
//     //데이터 -> row 생성
//     //for .. of => 배열 반복
//      for(let i = 0; i <friends.length; i++)  {
//          tlist += makeRow(friends[i]);
//      }
//     tlist += "</table></table>";
//     document.write(tlist);

    