//미리 타입을 정의해둔 것 
interface User {
    name: string;
    age: number;
};

// 변수에 인터페이스 활용
const cozy : User = {name :"yongwon", age: 30};

// 함수에 대한 인터페이스 활용
function getUser(user : User) {
    console.log(user);
}


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b:number): number; //argument 및 return type 정의
}

let sum : SumFunction;
sum = function(a: number, b: number) : number {
    return a + b;
}

//인덱싱
interface StringArray {
    [index : number] : string; //쉽게 생각했을 때 배열을 key-value 나타냈다고 생각
}

let arr : StringArray = ['a', 'b', 'c'];
arr[0] = '10';

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp; // key는 string, value는 정규직으로 정의
}

let obj : StringRegexDictionary= {
    cssFile: /\.css$/,
    jsFile : /\.js$/
}

// 인터페이스 확장
/*
type 선언과의 결정적인 차이는 상속여부이다
공식문서에서도 interface를 권장하고 있다.
*/
interface Person {
    name : string;
    age : number;
}

interface Developer extends Person { // 상속 (Java랑 비슷한듯)
    language : string;
}

let cozy_dev : Developer = {
    language : 'java',
    name : 'yongwon',
    age : 10
}
