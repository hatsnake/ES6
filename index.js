
//-- 16. Getter, Setter ------------------

/*
class Exam {
    // 필드 은닉화 (#[필드명]), 인스턴스 필드
    #kor;
    #eng;
    #math;
    // static 멤버
    static #info = "안녕하세요. 저는 Exam 클래스입니다.";

    constructor(kor=0, eng=0, math=0) {
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;
        // this.#info = "안녕하세요. 저는 Exam 클래스입니다.";
    }
    
    // getKor() {
    //     return this.#kor;
    // }
    // setKor(value) {
    //     this.#kor = value;
    // }
    

    get kor() {
        return this.#kor;
    }

    set kor(value) {
        this.#kor = value;
    }

    #total() {
        return this.#kor + this.#eng + this.#math;
    }
    avg() {
        return this.#total()/3.0;
    }
    static info() {
        return Exam.#info;
    }
}

let exam1 = new Exam();
// setKor(), getKor()
//exam1.setKor(30);
//console.log(exam1.getKor());

// set kor(), get kor()
exam1.kor = 30;
console.log(exam1.kor);
*/

//-- 15. class 멤버 은닉화, static 멤버 정의 ------------------

/*
class Exam {
    // 필드 은닉화 (#[필드명]), 인스턴스 필드
    #kor;
    #eng;
    #math;
    // static 멤버
    static #info = "안녕하세요. 저는 Exam 클래스입니다.";

    constructor(kor=0, eng=0, math=0) {
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;
        // this.#info = "안녕하세요. 저는 Exam 클래스입니다.";
    }
    #total() {
        return this.#kor + this.#eng + this.#math;
    }
    avg() {
        return this.#total()/3.0;
    }
    static info() {
        return Exam.#info;
    }
}

let exam1 = new Exam(70, 80, 55);
let exam2 = new Exam(10, 20, 30);
let exam3 = new Exam(88, 56, 35);

console.log("exam.total() : " + exam1.avg());
//console.log(exam1.kor);
console.log(Exam.info());
*/

//-- 14. class를 이용한 객체 정의 --------------------------

// 예전 방식 (생성자 함수)
/*
let proto = {kor:10, eng:30};

function Exam() {

}
Exam.prototype = proto;

let exam = new Exam();
console.log(exam.kor);
*/

// 새로운 방식 (클래스)
/*
class Exam {
    constructor(kor=0, eng=0, math=0) {
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
    total() {
        return this.kor + this.eng + this.math;
    }
    avg() {
        
    }
}

let exam = new Exam(70, 80, 55);
console.log("exam.total() : " + exam.total());
*/

//-- 13. Array Functions와 그 특징 -------------------------

/*
function print() {
    this.kor = 10;
    // this를 사용한 kor가 전역 변수(window)가 되는 문제 발생
    console.log("print : " + window.kor);
}

// 클래스는 아니고 생성자 같은 역할을 담당
function Exam() {
    this.kor = 0;
    this.eng = 0;
    this.math = 0;
}

print();
let exam = new Exam();
console.log(exam.kor);
console.log(kor);
*/

/*
const fun1 = (x, y)=>{
    return x + y;
}

const fun2 = (x, y)=>x + y;

console.log("func1(x, y) : " + fun1(2, 3));
console.log("func2(x, y) : " + fun2(2, 3));
*/

//-- 12. Default Value -------------------------------------

/*
// 이전 방식
function add(x, y) {
    x = x || 0;
    y = y || 0;

    return x + y;
}

console.log("add(2, 3) : " + add(2, 3));
console.log("add(1) : " + add(1));

// 현재 방식 (기본값은 없으면 초기화, 있으면 아규먼트 값)
function print(x, y=10, z=20) {
    console.log(`x:${x}, y:${y}, z:${z}`);
    console.log(arguments.length);
}

print(2,3);
*/

//-- 11. Spread Operator ------------------------------------

/*
function print(x, y, z) {
    console.log(`x:${x}, y:${y}, z:${z}`);
}

//let nums = [2, 4, 6];
let set = new Set([2, 4, 6]);
let nums = [...set];
print(...nums);

let map = new Map();
map.set("id", 3);
map.set("title", "hello");

let temp = [...map];
console.log("temp[0][1] : " + temp[0][1]);
*/

//-- 10. Rest Parameters ------------------------------------

/*
function print(x, y, ...values) {
    console.log(`${x}, ${y}`);
    console.log(`${arguments[0]}, ${arguments[1]}`);

    for(let i=0; i<values.length; i++) 
        console.log("values[i] : " + values[i]);
}

print(2, 3, 5, 6, 7);
*/

//-- 9. Map 컬렉션 -------------------------------------------

/*
// Map 초기화, 전체 조회
let exam = new Map([["kor", 10], ["eng", 10], ["math", 10]]);
// exam.set("kor", 10);
// exam.set("eng", 10);
// exam.set("math", 10);

for(let [key, value] of exam.entries()) 
    console.log(`key:${key}(${typeof(key)}), value:${value}(${typeof(value)})`);
*/

//-- 8. Set 컬렉션 -------------------------------------------

// Set은 중복된 값을 허용하지 않는다.
/*
let set = new Set();
set
.add(5)
.add("5")
.add(2)
.add(5);

console.log(set.size);
*/

/*
let ar = [1, 2, 3, 2 ,3, 4, 3, 4, 5];
let set = new Set(ar);
console.log(set.size);
*/

// forEach
/*
let set = new Set([2, 10, 7, 45, 23]);
set.forEach(function(value, key, ownerSet) {
    console.log("forEach : " + key + ":" + value);
});
*/

// for-in과 for-of 존재
/*
for(let [key, value] of set.entries()) 
    console.log("for-of : " + key + ":" + value);
*/

// 조회, 삭제
/*
console.log("set.has(2) : " + set.has(2));
console.log("set.delete(10) : " + set.delete(10));
for(let [key, value] of set.entries()) 
    console.log("for-of 2 : " + key + ":" + value);
*/

//-- 7. Array Destructuring #2 -------------------------------

/*
// 배열에 없는 변수를 만들고 초기화
let kors = [10, 20, 30];
let [kor1, kor2, kor3, kor4=40] = kors;
console.log(`kor4:${kor4}`);

let exam = [10, 20, 30, [40, 50]];
let [kor, eng, math, [com, history]] = exam;
console.log(com);

let notice = {
    title:"공지사항",
    files:["img1.png", "img2.png"]
};
*/

/*
let {title, files:[img1, img2]} = notice;
console.log(`title:${title}, img1:${img1}, file2:${img2}`); 
*/

/*
let notices = {
    title:"공지사항",
    list:[
        {title:"타이틀1", content:"내용1"},
        {title:"타이틀2", content:"내용2"}
    ]
};

let {title, list:[notice1, notice2]} = notices;
console.log(notice1.title);
*/

//-- 7. Array Destructuring #1 -------------------------------

/*
// 배열의 데이터를 변수에 넣는 방법
let kors = [10, 20, 30];
let [, , kor3] = kors;
console.log(`kors3:${kor3}`);

let temp = [40, 70, 30];
[kor1, kor2, kor3] = temp;
console.log(`kor1:${kor1}, kor2:${kor2}, kor3:${kor3}`);

// Swap
let x=2, y=3;
[y, x] = [x, y];
console.log(`x:${x}, y:${y}`);
*/

//-- 6. Object Destructuring #3 -------------------------------

/*
let exam = {
    kor:10,
    eng:20,
    math:30,
    student:{
        name:"newlec",
        phone:"010-2222-3333"
    }
};

let {kor, eng , student:{name, phone}} = exam;
console.log(kor);
console.log(eng);
console.log(name);
console.log(phone);
*/

/*
let exam = {
    kor:20,
    eng:30,
    math:40
};

// 변수명:별명 - 별명만 사용가능 (변수명 X)
let {kor:korean, eng:english} = exam;

console.log(`korean:${korean}`);
console.log(`kor:${kor}`);
*/

//-- 6. Object Destructuring #2 -------------------------------

/*
let exam = {
    kor:20,
    eng:30,
    math:40
};

// 자바스크립트 객체에 없는 속성값을 넣고 계산을 한다.
let {kor, eng, math, total=kor+eng+math} = exam;

console.log(`kor:${kor}, eng:${eng}, math:${math}, total:${total}`);

// 자바스크립트 객체 값을 바꾸고, 
// 외부 변수에 자바스크립트 객체 값 적용하기
exam.kor = 100;
exam.math = 90;

({kor, math} = exam);

console.log(`kor:${kor}`);
*/

//-- 6. Object Destructuring #1 -------------------------------

/*
let exam = {
    kor:20,
    eng:30,
    math:40
};

function print(exam) {
    // // 1차 방법
    // console.log(`kor:${exam.kor}`);

    // // 2차 방법
    // let kor = exam.kor;
    // console.log(`kor:${kor}`);

    // 3차 방법
    let {kor, eng, math} = exam;
    console.log(`kor:${kor}, eng:${eng}, math:${math}`);
}

// 4차 방법
function print2({kor, eng, math}) {
    console.log(`kor:${kor}, eng:${eng}, math:${math}`);
}

print(exam);
print2(exam);
*/

//-- 5. 향상된 객체의 표현식 #2 --------------------------------

// 속성의 키를 변수로 만들어서 사용하는 것이 조금 이상
/*
const attr = "kor";
let exam = {
    [attr]:10
};

console.log(exam.kor);
*/

//-- 5. 향상된 객체의 표현식 #1 --------------------------------

/*
let kor = 30;
let eng = 40;
let math = 50;

// kor:kor → kor, total:function(){} → total(){}
let exam = {kor, eng, math, total() {
    return 10;
}};

console.log(exam.total());
*/

//-- 4. template String (억음 부호) ---------------------------

/*
let title = "ES6";
let content = "새로운 문자열";

let template = 
`
    <section>
        <h1>${title}</h1>
        <p>${content}</p>
    </section>
`;

// 문자열 그대로 인식하기 (\n)
let template2 = String.raw
`
    <section>
        <h1>${title}\n\n\n</h1>
        <p>${content}</p>
    </section>
`;

console.log(template2);
*/

//-- 3. const 변수 -------------------------------------------

/*
const N = 1;
const S = 5;

var walkTo = S;
// S = 3;

console.log(walkTo);

const add = function(a, b) {
    return a + b;
}

// add는 함수이지만 var로 선언해서, 숫자형으로 바꿀 수 있음.
add = 3;

console.log(add(3, 4));
*/

//-- 2. let을 통한 변수의 지역화-------------------------------

// var value가 코드블록 밖에서도 유효해버림.
// 해결법 : let을 사용
/*
    function getValue(condition) {
        if(condition) {
            let value = "blue";
            return value;
        } else {
            return value;
        }
    }

    let result = getValue(false);
    console.log(result);
*/

//-- 1. var의 문제점 ------------------------------


// var는 사용하지 않는다. (window.x 같은 전역변수에 들어감)
/*
    let x = 30;
    console.log(x);

    x = 20;
    console.log(x);
*/

// 지역변수는 범위 밖에 나가면 사라진다.
/*
    {
        let y = 30;
    }

    console.log(y);
*/
