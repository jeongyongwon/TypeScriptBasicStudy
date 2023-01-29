enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike
console.log(myShoes); // 아무 값을 지정하지 않으면 default number 0

//예제
/*
개인적인 생각으론 고정된 여러값들을 비교할 때 사용하면 좋을 것 같다
*/ 
enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }

    if (answer === Answer.No) {
        console.log('오답입니다');
    }
}

askQuestion(Answer.Yes);