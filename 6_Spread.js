//Spread 연산자: 배열과 객체를 한줄로 펼치는 방법
const cookie = {
    base: 'cookie',
    madeIn: 'Korea',
};
const chocoCookie = {
    base: 'cookie',
    madeIn: 'Korea',
    toping: 'choco',
};
const blueberryCookie = {
    base: 'cookie',
    madeIn: 'Korea',
    toping: 'blueberry',
};
const strawberryCookie = {
    base: 'cookie',
    madeIn: 'Korea',
    toping: 'strawberry',
};
console.log(chocoCookie); //{ base: 'cookie', madeIn: 'Korea', toping: 'choco' }
/*
base, madeIn property는 겹친다. 이것은 가장 상단의 cookie의 property가 근본이 된다.
⇒ spread 연산자를 이용하여 해결
*/
const cookie2 = {
    base: 'cookie',
    madeIn: 'Korea',
};
const chocoCookie2 = {
    ...cookie2,
    toping: 'choco',
};
const blueberryCookie2 = {
    ...cookie2,
    toping: 'blueberry',
};
const strawberryCookie2 = {
    ...cookie2,
    toping: 'strawberry',
};
console.log(chocoCookie2); //{ base: 'cookie', madeIn: 'Korea', toping: 'choco' }

//배열과 Spread 연산자
const noTopping = ['촉촉', '안촉촉'];
const topping = ['블루베리', '딸기', '초코', '바나나'];
//두개의 배열을 합칠때 concat 메서드를 사용해도 되지만, spread 연산자를 사용해도 됨
const allCookie = [...noTopping,'함정 쿠키', ...topping];
console.log(allCookie); //[ '촉촉', '안촉촉', '함정 쿠키', '블루베리', '딸기', '초코', '바나나' ]