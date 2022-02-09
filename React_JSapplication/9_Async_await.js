//Async & Await 직관적인 비동기 처리 코드 작성하기
//1. async: 프로미스 객체를 더욱 쉽게 이용할 수 있도록 해줌(비동기 처리 도구 중 하나)
function hello() {
  return "hello";
}
async function helloAsync() {
  //async를 붙이면 helloAsync()가 promise 반환하는 비동기처리 함수가 됨
  return "hello Async";
}
console.log(hello());
console.log(helloAsync());

helloAsync().then((res) => {
  console.log(res);
});

//2. await
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function helloAsync2() {
  //async를 붙이면 helloAsync()가 promise 반환하는 비동기처리 함수가 됨
  return delay(3000).then(() => {
    return "hello Async";
  });
}

helloAsync2().then((res) => {
  console.log(res);
});
//await을 사용하여 위 코드를 더욱 간단하게 수정할 수 있음
function delaySec(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function asyncFunc() {
  await delaySec(3000);
  return "hello Async!";
}

function main() {}
main();

asyncFunc().then((res) => {
  console.log(res);
});
/*
await 키워드가 붙은 함수는 동기적으로 작동하기 때문에
해당 delaySec가 끝나기 전까지 return 'hello Async!'는 실행되지 않음
*/
//main() 추가 예제
function delaySec2(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function asyncFunc2() {
  await delaySec2(3000);
  return "hello Async2!";
}

async function main() {
  const res = await asyncFunc2();
  console.log(res);
}
main();
