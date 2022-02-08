//Truthy: 참이 아니라 참 같은 값
//Falsy: 거짓이 아니라 거짓 같은 값
let a = '';
if (a) {
    console.log(true);
} else {
    console.log(false);
}
//false 출력
/*
빈 문자열(string)이 if문의 조건식에 들어가면 false로 인지를 함
*/
let b = 'string';
if (b) {
    console.log(true);
} else {
    console.log(false);
}
//true
/* 
빈 문자열이 아닌 string 변수가 if 조건문에 들어가면 true로 인지함
=> JS 조건문에서는 boolean을 넣지 않아도 참이나 거짓으로 인지되는 속성이 있음
*/
let c = undefined;
if (c) {
    console.log(true);
} else {
    console.log(false);
}
//false

//truthy, falsy 활용하기
const getName = (person) => {  //person: 특정한 객체 파라미터
    return person.name;
};
let person = { name: '이혜은' };
const pName = getName(person);
console.log(pName);
/*
만약 person이라는 값에 undefined를 전해준다면? 에러가 발생
-> 왜냐하면 getName(person)함수를 보면 person.name을 return 하는데 아래 코드의 경우
   undefined에 .name을 하는 것과 같으므로 에러가 뜸(undefined는 객체가 아니기에 property에 접근할 수 없다.)
*/
/*
let person1 = undefined;
const pName2 = getName(person1);
console.log(pName2);
*/

//문제 해결하기
//1. if문 예외처리
const getName2 = (person) => {
    if (person === undefined) {
        return '객체가 아닙니다.'; //예외처리
    }
    return person.name;
};
/*
예외 처리를 하여 person이 undefined 일 때, 
객체가 아닙니다.'를 return 하고 아래의 코드도 실행되지 않도록 하여 오류를 방지한다.
⇒ 하지만 if 문으로 예외 처리 하는 것도 완벽한 문제 해결 방법은 아니다.
*/
//2.Falsy 속성으로 문제 해결하기
const getName3 = (person) => {
    if (!person) {
        return '객체가 아닙니다.'; //예외 처리
    }
    return person.name;
};

let person3 = null;
const NNNName = getName3(person3);
console.log(NNNName);
/*
person이 number나 string과 같은 일반 truthy면 에러가 발생하는것이 아니라 undefined가 출력됨
*/