//계산기능을 모아둔 calculate.js 파일의 여러가지 함수나 객체를 index.js에서 가져다 쓰는 방법
const calc = require("./2_calculate");
console.log(calc);

console.log(calc.add(1, 2));
//calc가 calculate 모듈을 객체 단위로 받아왔기때문에 ' . ' 표현법 사용이 가능
console.log(calc.sub(4, 2));
