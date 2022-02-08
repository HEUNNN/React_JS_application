//계산 기능을 하는 파일 = 계산 기능을하는 분리된 파일(모듈)
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
//계산 기능을 하는 파일을 index.js에서 사용하기 위해서는 모듈을 내보내야 함
//모듈은 어떤 기능을 담당하는 분리된 파일이다.

module.exports = {
  //module.exports를 가지고 객체 단위로 모듈을 내보낼 수 있음
  moduleName: "calc module", //내보낸 모듈을 지칭하는 이름을 clac module이라 정함
  add: add,
  sub: sub,
};
