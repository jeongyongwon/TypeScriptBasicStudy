// 기존 JS 
function sum_js(a, b) {
    return a + b;
}
sum_js(10,20);


// TS 방식 : result type, return type 가 있다
function sum_ts(a: number, b: number) : number {
    return a + b;
};

sum_ts(10, 20);


//기존 js 함수 인자
function log_js(a) {
    console.log(a);
}

log_js(10,10) // 기존은 에러 나지 않는다

// TS Optional
function log_ts(text: string, type?: string) {
    console.log(text);
}

log_ts('hi');
log_ts('ㅋㅋㅋ', 'ㅅㅅㅅ')
