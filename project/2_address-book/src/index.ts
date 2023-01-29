import {PhoneNumberDictionary, Contact, PhoneType} from './types';
// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts() : Promise<Array<Contact>> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts : Array<Contact> = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: { // [phone: string] 부분
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts : Array<Contact> = [];

  constructor() {
    this.fetchData();
    // findContactByPhone(1000, PhoneType.Home);
  }

  fetchData() {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name : string)  : Array<Contact> {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address : string) : Array<Contact> {
    return this.contacts.filter(contact => contact.address === address);
  }

  // phoneType 은 string으로 넣다보니 오타가 발생할 수 있다.
  // PhoneType 은 3가지로 제한되어있기 때문에 사용한다
  // enum을 쉽게 생각하면 해당 타입 안에 있는 key들 중 하나가 매칭 되는 value 제한걸어버리겠다는 의미
  findContactByPhone(phoneNumber : number, phoneType: PhoneType) : Array<Contact> {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact : Contact) {
    this.contacts.push(contact);
  }

  displayListByName() : Array<string> {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress() : Array<string> {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
