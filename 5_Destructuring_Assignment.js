//비구조화 할당(구조분해 할당): 배열과 객체를 우아하게 사용하는 방법
let arr = ['one', 'two', 'three'];

let one = arr[0];
let two = arr[1];
let three = arr[2];
console.log(one, two, three);
//arr을 반복해서 사용해야하는 문제가 발생한다. 비구조화 할당으로 더욱 간단하게 코드를 작성할 수 있다.

let [one2, two2, three2] = arr;
console.log(one2, two2, three2);

let [one3, two3, three3] = ['one', 'two', 'three'];
console.log(one3, two3, three3);

//undefined가 나올경우 
let [one4, two4, three4, four4] = ['one', 'two', 'three'];
console.log(one4, two4, three4, four4); //one two three undefined
//기본값을 설정해줌
let [one5, two5, three5, four5 = 'default'] = ['one', 'two', 'three'];
console.log(one5, two5, three5, four5); //one two three default

//swap
let a = 10;
let b = 20;
let tmp;

tmp = a;
a = b;
b = tmp;
console.log('a: ', a, 'b: ', b);
//비구조화 할당을 사용하여 더욱 간단하게 swap
let c = 10;
let d = 20;
[c, d] = [d, c];
console.log('c: ', c, 'd: ', c);

//객체의 비구조화 할당
let object = { numOne: 'one', numTwo: 'two', numThree: 'three' };
let numOne = object.numOne;
let numTwo = object.numTwo;
let numThree = object.numThree; //반복 노동이 존재
console.log(numOne, numTwo, numThree);
//객체의 비구조화 할당으로 반복 노동 줄이기
let object2 = { numOne2: 'one', numTwo2: 'two', numThree2: 'three', myName: '이혜은' };
let { myName, numOne2, numTwo2, numThree2 } = object2;
console.log(numOne2, numTwo2, numThree2, myName); //one two three 이혜은
/*

object의 key name과 let {a, b, c}의 a, b, c가 일치하지 않으면 undefined 출력

=> why? 객체의 비구조화 할당은 keyName의 순서대로 일치시키는게 아니라 keyName에 따라 일치시킴

﻿
*/
/*
객체의 비구조화 할당을 하며 객체의 property key 값(key name)과 같은 단어로 접근을 해야하기 때문에
변수명이 key 값으로 강제되는 부분이 있다. ' : '을 사용하여 해결
*/
let object2 = { numOne: 'one', numTwo: 'two', numThree: 'three' };
let { numOne: numOne2, numTwo: numTwo2, numThree: numThree2 } = object2;
console.log(numOne2, numTwo2, numThree2);