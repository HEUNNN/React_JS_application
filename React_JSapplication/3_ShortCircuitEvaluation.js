//단락회로 평가 -> 논리 연산자의 특성을 이용한 문법
// && : and
console.log(true && true);
console.log(false && true); //뒤에 위치한 피연산자를 확인할 필요도 없이 연산이 끝남

// || : or
console.log(false || true);
console.log(true || false); //뒤에 위치한 피연산자를 확인할 필요도 없이 연산이 끝남

//Truthy와 Falsy를 이용한 단락회로 평가
const getName = (person) => {
    return person && person.name;
}
let person;
const pName = getName(person);
console.log(pName);
//응용
const getName2 = (person) => {
    const resName = person && person.name;
    return resName || '객체가 아닙니다.'; //resName이 true이면 뒤에 위치한 truthy는 고려하지 않음
    //'객체가 아닙니다.' -> Truthy
};
let person2 = null;
const pName2 = getName2(person2);
console.log(pName2); //객체가 아닙니다.

let person3 = { name: '이혜은' };
const pName3 = getName2(person3);
console.log(pName3); //이혜은