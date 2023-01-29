//generic 기본
// const logText = (text) => {
//     console.log(text);
//     return text;
// }

// logText(10); // 숫자 반환
// logText('str'); // 문자열
// logText(true); // boolean

//명시적으로 string으로 type를 넘기고 받겠다고 말하고 있음
// 장점은 여러 타입의 상황을 고려할 때 유리하다
/*
function logText<T>(text: T) : T {
    return text;
}
logText<string>('hi'); 
*/

//인터페이스에 generic 선언하는 방법
// 이렇게 유연성을 제공하고 있다
/*
interface Dropdown<T> {
    value : T;
    selected : boolean;
}
const obj1 : Dropdown<string> = {value : 'abc', selected : false};
const obj2 : Dropdown<number> = {value : 1, selected : false};
*/

// generic type restriction
// 배열로 제한을 두어 표현할 수 있다.
/* 
function logTextLength<T>(text : Array<T>) : T[] {
    console.log(text.length); //길이가 있는지 없는 지 확실할 수 없다
    return text;    
}

logTextLength<string>(['hi', 'good']);
*/

console.log('a'.toString())
/* 
 generic type restriction 2
 해당 타입이 존재할 것이다라고 상속받아서 선언함

 개인적인 생각으로 정말 빡빡하게 제한걸 수 있을 것 같음
*/

interface LengthType {
    length: number;
    toString() : void;
}

//언어 입장에서는 length있는게 불확실하다
function logTextLength<T extends LengthType>(text : T) : T {
    console.log(text.length);
    console.log(text.toString());
    return text;
}

logTextLength('a')
// logTextLength(10)   해당 코드는 에러가 난다.


//keyof로 제한하기
interface ShoppingItem {
    name : string;
    price : number;
    stock : number;
}

// T는 상속받는 것 중에 한가지가 generic이 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T) : T{    
    return itemOption;
}

// 인자 단축키 ctrl + space
// getShoppingItemOption("price");