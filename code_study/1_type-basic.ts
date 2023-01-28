// 문자열
const str: string = 'hello';

// 숫자
const num: number = 10;


// 배열
const arr: Array<string> = [];
arr.push('hi');

let heroes : Array<string> = ['a','b','c', 10];  // 이렇게 선언할 때 바로 에러를 리턴함

let item : number[] = [1,10,];

//튜플
let address : [string, number] = ['테스트', 10];

//객체
let obj : object = {};
let person : object = { // 기존 js 방식 
    name : 'capt',
    age : 100
}

//타입 객체
let person_ts :  {age : number; name: string} ={
    age : 100,
    name : "yongwon"
};

// 진위값
let isLogin : boolean = false;