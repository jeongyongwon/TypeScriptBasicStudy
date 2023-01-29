//기존 js 클래스 
/*
class Person {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const capt = new Person('Steve', 100);
*/

//js proto type
/*
let user = {name : 'cozy', skill : 'java'};
let admin = {};
admin.__proto___ = user;
console.log(admin.name) // 상속받음
*/

class Person {
    private name : string;
    public age: number;
    readonly log: string;

    constructor(name : string, age: number){ 
        this.name = name;
        this.age = age;
    }
}