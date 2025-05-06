//function8.js
// 1. JSPN.parse vs. JSON.stringify

 console.log(json); // 문자열
 let data = JSON.parse(json); //json문자열 -> 객체 변환
 console.log(data); //객체

    
    //button<삭제> 템플릿.
    let btnTemplate = "<button class='btn btn-danger' onclick='deleteTr(event)'>삭제</button>";
        // console.clear(); // 로그지우기

    for (let emp of data) {
        console.log(emp);
    }
    // 속성을 정의
    let fields =['id','first_name','gender','salary'];

    // 사원목록(table형식)을 출력.
    let elist = "<table class='table'><thead><tr>";
   // elist += "<tbody>";
   for (let field of fields){
        elist += `<th>${field}</th>`;
    }                         
     elist +=`<th>삭제</th>`;                    //for (let emp of data) {
     elist +="<tr><thead><tbody>";
     for (let i=0; i<data.length; i++){
        elist += makeTr(data[i]);
    }                                           //console.log(emp);
     elist +="</tbody><table>";
     document.write(elist);                     //elist += makeTr(emp);


    /////////////////////////////
    /// 이벤트.
     document.querySelector('button#searchBtn')
    .addEventListener('click', function(){
        // 입력값
        let searchValue = document.querySelector('#userValue').value;
        let list ="";
        for (let emp of data){
            if (searchValue == 'All'||searchValue ==emp.gender){
            list += makeTr(emp);
         }   
        }    
            document.querySelector('table.table>tbody') // <tbody></tbody>
            .innerHTML = list;
            
     });
     //2.select "change";

    // tr을 생성하는 함수
    function makeTr(emp={}) {
       let str = "<tr>";    ``
        
        
     for(let field of fields) {
        //console.log(emp[field]); emp['id'] == emp.id
        str += `<td>${emp[field]}</td>`;

    }
            str +=`<td>${btnTemplate}</td>`;
            str += "</tr>";
            return str;
    } // end of makeTr

    console.log(makeTr)

    // makeTr({id:12, first_name: "kildong",
    //         email: "kildong@email.com"});
    

    function deleteTr(e){
        console.log(e);
        e.target.parentElement.parentElement.remove();
    }