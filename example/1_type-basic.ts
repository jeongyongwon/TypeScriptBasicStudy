// 문자열
const str: string = 'hello';

// 숫자
const num: number = 10;

// 배열
const arr: Array<string> = [];
arr.push('hi');

let heroes : Array<string> = ['a','b','c', '10'] // 이렇게 선언할 때 바로 에러를 리턴함

// 배열 - 리터럴 적용
const items: string[] = [];
// items.push(10);

// 튜플
const address: [string, number] = ['판교', 40];

// 객체
const obj: object = {};
// obj.a = 10;

// 타입 객체
const person: { age: number; name: string } = { age: 100, name: 'Capt' };
person.age = 101;

// 진위값
let isLogin: boolean = false;