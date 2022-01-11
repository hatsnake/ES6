
//-- 6. Object Destructuring #3 -------------------------------

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
