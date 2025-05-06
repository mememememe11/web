let json = `[
    {"id": 1, "first_name": "홍길동", "email": "hong@test.com", "salary": 3000, "gender": "Male"},
    {"id": 2, "first_name": "김영희", "email": "kim@test.com", "salary": 3200, "gender": "Female"},
    {"id": 3, "first_name": "이철수", "email": "lee@test.com", "salary": 2800, "gender": "Male"}
]`;

// 문자열 → 객체 변환
let data = JSON.parse(json);
let fields = ['id', 'first_name', 'email', 'salary'];

// 테이블 생성 함수
function drawTable(filteredData) {
    let elist = "<table class='table'><thead><tr>";
    for (let field of fields) {
        elist += `<th>${field}</th>`;
    }
    elist += "</tr></thead><tbody>";

    for (let emp of filteredData) {
        elist += makeTr(emp);
    }

    elist += "</tbody></table>";
    document.querySelector('#output').innerHTML = elist;
}

// tr 생성 함수
function makeTr(emp = {}) {
    let str = "<tr>";
    for (let field of fields) {
        str += `<td>${emp[field]}</td>`;
    }
    str += "</tr>";
    return str;
}

// 초기 전체 출력
drawTable(data);

// 검색 이벤트
document.querySelector('#searchBtn').addEventListener('click', function () {
    let searchValue = document.querySelector('#userValue').value.trim();
    let filtered = (searchValue === 'All' || searchValue === '')
        ? data
        : data.filter(emp => emp.gender === searchValue);
    drawTable(filtered);
});
</script>