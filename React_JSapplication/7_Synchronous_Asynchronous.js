//동기 & 비동기
//1. 수행해야할 작업이 3개
function taskA() {
    console.log('TASK A');
}
function taskB() {
    console.log('TASK B');
}
function taskC() {
    console.log('TASK C');
}
taskA();
taskB();
taskC();
//thread: 코드를 한줄 한줄 실행(연산)하는 일꾼
/*
자바스크립트는 코드가 작성된 순서대로 작업을 처리하며, 이전 작업이 진행 중 일때는
다음 작업을 수행하지 않고 기다린다.
=> 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다.
= 동기 방식

블로킹 방식: 스레드에서 작업 하나가 실행되고 있을때, 다른 작업을 수행할 수 없는 방식

동기 방식의 문제점: 하나의 작업이 너무 오래 걸리게 될 시,
모든 작업이 오래 걸리는 하나의 작업이 종료되기 전까지 올 스톱이 되기 때문에,
전반적인 흐름이 느려진다.
*/
/*
1) 동기 방식의 문제점을 해결하기 위해 '멀티 쓰레드' 사용
=> 코드를 실행하는 일꾼 스레드를 여러개 사용하여 작동시키면 작업 분할이 가능하다.
   즉, 오래걸리는 일이 있어도 다른 일꾼 스레드에게 지시하면 되므로 괜찮음

   그러나 JavaScript는 싱글 스레드로 동작하기 때문에 멀티 스레드 방식이 불가능함

2) JavaScript의 동기 방식을 해결하기 위해 '비동기 작업'을 수행
   싱글 스레드 방식을 이용하면서, 동기적 방식의 단점을 극복하기 위해 여러개의 작업을 동시에 실행시킴
   즉, 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행

   논-블로킹 방식: 하나의 스레드가 작업을 진행 중일때 스레드가 다른 작업을 수행하지 못하도록 점유 하지 않는 방식
   => 각 작업들의 결과를 어떻게 확인할까? 각각의 함수들에게 콜백 함수를 붙여서 전달하면 됨
*/
taskA((resultA) => {
    console.log(`A 끝났습니다. 작업 결과: ${resultA}`); //A callback
});
taskB((resultB) => {
    console.log(`B 끝났습니다. 작업 결과: ${resultB}`); //B callback
});
taskC((resultC) => {
    console.log(`C 끝났습니다. 작업 결과: ${resultC}`); //C callback
});

//2. 비동기 방식 예제(1) setTimeout() -> 내장 비동기 함수
function aTask() {
    setTimeout(() => {
        console.log('A TASK END');
    }, 2000);
}
aTask();
console.log('코드 끝');
//먼저 실행된 작업이 끝나는 것을 기다리지 않고 다음 작업을 바로 실행하는 '비동기 방식'
//3. 비동기 방식 예제(2)
function bTask(a, b) {
    setTimeout(() => {
        const res = a + b; //지역 변수
    }, 3000);
}
bTask(3, 4);
console.log('코드 끝');
//지역 변수인 res를 밖에서 사용하기 위해 CallBack 함수 사용
function bTask2(a, b, callBack) {
    setTimeout(() => {
        const res = a + b;
        callBack(res);
    }, 3000);
}
bTask2(3, 4, (result) => { console.log('B2 TASK RESULT : ', result) });
console.log('코드 끝');

/*function bTask3(a, b, result) {
    setTimeout(() => {
        const res = a + b;
        return result = res;
    }, 3000);
}
let result;
bTask3(3, 4, result);
console.log(result);
console.log('코드 끝');
연산이 완료되기 전에 let result;가 먼저 console.log되어 undefined가 출력됨
=> callback 함수로 result를 받아오는 이유
*/

//3. 비동기 방식 예제(3) -> C task가 1초, B2 task가 3초 이므로 C가 먼저 출력
function cTask(a, callBack) {
    setTimeout(() => {
        const res = a * 2;
        callBack(res);
    }, 1000);
}

cTask(7, (result) => {
    console.log('C TASK RESULT : ', result);
});

//4. 비동기 방식 예제(4)
function calA(a, b, cb) {
    setTimeout(() => {
        const res = a + b;
        cb(res);
    }, 3000);
}
function calB(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}
function calC(a, cb) {
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}
calA(4, 5, (a_res) => {
    console.log('A RESULT: ', a_res);
    calB(a_res, (b_res) => {
        console.log('B RESULT: ', b_res);
        calC(b_res, (c_res) => {
            console.log('C RESULT: ', c_res);
        });
    });
}); //콜백 지옥이 일어날 수 잇음

console.log('코드 끝');
/*
코드 끝
A RESULT:  9
B RESULT:  18
C RESULT:  -18
*/