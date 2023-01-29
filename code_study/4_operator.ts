let cozy_king : string | number | boolean;

// union type => 하나 이상의 타입을 사용할 수 있다
function logMsg(value: string | number) {
    //type 에 따라서 분기
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString()
    }
    
    throw new TypeError('value must be string or number'); //type에 관한 예외처리
    
}

logMsg(10);
logMsg('string');

interface Person {
    name: string;
    skill: string;
}

interface Developer   {
    name: string;
    age: number; 
}


/*
    interface를 여러개 union 했을 때 
    공통된 key가 있을 경우는 바로 접근할 수 있지만,
    공통되지 않으면 타입가드 작업이 필요하다
*/
function askSomeone(someone : Developer | Person) {
    someone.name;
    someone.skill;
    someone.age;
}
