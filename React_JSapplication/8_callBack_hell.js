//콜백 지옥
//Promise 객체: JS의 비동기를 돕는 객체, 비동기 처리의 결과값을 다루는 코드를 비동기 함수로부터 분리 가능
//대기상태(pending) => 해결(resolve) : 성공(Fulfilled)
//대기상태(pending) => 거부(reject) : 실패(Rejected)
//1. 예제
function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if (typeof number === 'number') {
            //비동기 작업 성공(resolve)
            resolve(number >= 0 ? '양수' : '음수');
        } else {
            //비동기 작업 실패(reject)
            reject('주어진 값이 숫자형 값이 아닙니다.');
        }
    }, 2000);
}
isPositive(10, (res) => {
    console.log('Success, Result: ', res);
}, (err) => {
    console.log('Fail, Error message: ', err);
});

//2. Promise 사용
function isPositiveP(number) { //Promise 적용
    const executor = (resolve, reject) => { //성공시 resolve 콜백함수, 실패시 reject 콜백함수를 넘겨 받음
        //실행자
        setTimeout(() => {
            if (typeof number === 'number') {
                //비동기 작업 성공(resolve)
                resolve(number >= 0 ? '양수' : '음수');
            } else {
                //비동기 작업 실패(reject)
                reject('주어진 값이 숫자형 값이 아닙니다.');
            }
        }, 2000);
    };
    const asyncTask = new Promise(executor);
    return asyncTask;
    /*비동기 작업 자체(promise)를 저장할 상수 asyncTask를 만들고, new keyword를 사용해서 Promise 객체를 생성하고
     Promise 객체의 생성자로 executor(비동기 작업의 실질적인 실행자 함수)를 넘겨주면 자동으로 executor 함수가 수행이 됨
    */
}
//비동기 처리에 대한 결과(resolve or reject)값을 response 상수에 저장하고 아무곳에서나 사용이 가능
const response = isPositiveP(1);
//Promise 객체의 비동기 처리에 대한 결과를 사용하는 방법
response
    .then((res) => { //resolve시 then 메서드
        console.log('작업 성공: ', res)
    })
    .catch((err) => { //reject시 catch 메서드
        console.log('작업실패: ', err)
    });

//3. 콜백 지옥을 Promise 객체로 탈출하는 방법 예제
//1) 콜백 지옥이 생길 수 있는 코드
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
calA(3, 4, (a_res) => {
    console.log('A RESULT: ', a_res);
    calB(a_res, (b_res) => {
        console.log('B RESULT: ', b_res);
        calC(b_res, (c_res) => {
            console.log('C RESULT: ', c_res);
        });
    });
});

console.log('코드 끝');
//2) promise를 사용하여 위 코드를 수정 but 아직은 콜백 지옥에서 완전히 벗어나지 못함
function calA1(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    });
}
function calB1(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    });
}
function calC1(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000);
    });
}

calA1(5, 1).then((a_res) => { //but 아직은 콜백 지옥에서 완전히 벗어나지 못함
    console.log('A RESULT: ', a_res);
    calB1(a_res).then((b_res) => {
        console.log('B RESULT: ', b_res);
        calC1(b_res).then((c_res) => {
            console.log('C RESULT: ', c_res);
        });
    });
});
//3) promise를 사용하여 위 코드를 수정 -> 콜백 지옥 벗어남
function calA2(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    });
}
function calB2(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    });
}
function calC2(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000);
    });
}
calA2(5, 1).then((a_res) => { //then chaining
    console.log('A RESULT: ', a_res);
    return calB2(a_res); //calB2를 호출해서 반환받은 Promise
}).then((b_res) => {
    console.log('B RESULT: ', b_res);
    return calC2(b_res);
}).then((c_res) => {
    console.log('B RESULT: ', c_res);
});