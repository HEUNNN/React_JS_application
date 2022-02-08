//삼항 연산자

let a = 3;
if (a >= 0) {
    console.log('양수');
} else {
    console.log('음수');
}
//삼항 연산자로 간단하게 표현하기
let b = 3;
b >= 0 ? console.log('양수') : console.log('음수');

let c = [];
const arrayStatus = c.length === 0 ? '빈 배열입니다.' : '빈 배열이 아닙니다.';
console.log(arrayStatus);

//삼항 연산자 & Truthy, Falsy
let d;
const res = d ? true : false;
console.log(res);
//삼항 연산자를 중첩하기 -> 학점 계산 프로그램
/*
90점 이상: A+
70점 이상: B+
50점 이상: C+
50점 미만: D+
*/
let score = 53;
const grade = score >= 90 ? 'A+' : score >= 70 ? 'B+' : score >= 50 ? 'C+' : 'D+';
console.log(grade);