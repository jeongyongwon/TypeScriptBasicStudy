// 자바스크립트 함수 선언
function sum(a, b) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 매개 변수
function add(a: number, b: number) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 반환 타입
function add(a: number, b: number): number {
  return a + b;
}

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
// 기존 js는 상관없이 인자를 넣을 수 있음
function log(a: string) {
  console.log(a);
}
log('a', 10);

// 함수 옵셔널 파라미터(optional parameter)
// 파라미터를 넣을지 말지 선택할 수 있다
// 오버로딩 개념인거 같다
function printText(text: string, type?: string) {
  console.log(text);
}
printText('hi');
printText('ㅋㅋㅋ', 'ㅅㅅㅅ')
