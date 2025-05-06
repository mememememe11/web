//object1.js
//컴파일 : 사람이 만든 코드를 컴퓨터언어로 바꾸는걸 컴파일 이라 함
// 객체지향(자바 : 작은기능들을 조합해서 사용했었음,함수:컴파일) // 함수기반(자바스크립트)+(나중에)객체: 인터프리터 (해석한다는 뜻) 
// 객체 : 눈 에 보이는 모든 사물, this = 객체 자기자신
//this => 1. 객체(객체를 가리킴) 2. 함수(window 안에서는 윈도우 객체를 가리킴) 3. 이벤트(이벤트를 받는 대상을 가리킴)
function sum(){

   console.log(this);
}   
    // 함수호출
sum();


let obj = {
    name:"홍길동",
    age: 20,
    showName: function () {
        console.log(this);
        return `이름은 ${this.name} 입니다`      
    },
    setName(name){ //setName : function(name)
        this.name = name;
    }
}   
obj.setName("김길동");
let result = obj.showName();
console.log(result);       // log : 콘솔이 가지고 있는 메소드

// class 생성.

class Person{
 // name, age: 속성
 // showName(), setName();메소드
 constructor(name,age){ //생성자
    this.name = name;
    this.age = age;
    }

    // 메소드
    showName(){
        return `이름은 ${this.name}입니다`;
    }
    setName(name){
        this.name = name;
    }
    showAge(){
        return `나이는 ${this.age}입니다`;
    }
    setAge(age){
        this.age = age;
        
    }
}
let choi = new Person("최민식", 22); // 인스턴스 생성
choi.setName("최민수");
console.log(choi.showName());


let park = new Person("박충식",30); // 인스턴스 생성


