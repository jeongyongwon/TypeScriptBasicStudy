interface DropdownItem<T> {
  value: T;
  selected : boolean;
}

// interface Email {
//   value : string;
//   selected : boolean;
// }

// interface ProductNumber {
//   value : number;
//   selected : boolean;
// }

// interface TrueFalse {
//   value : boolean;
//   selected : boolean;
// }

const emails : Array<DropdownItem<String>> = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];


const numberOfProducts : Array<DropdownItem<number>>= [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

//interface union type으로 해결
// union type으로 하게되면 결과적으로 3가지 interface를 선언해야한다

// function createDropdownItem(item :Email | ProductNumber | TrueFalse) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }


//위의 비슷한 함수를 generic의 받아보자
function createDropdownItem(item : DropdownItem<String> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});