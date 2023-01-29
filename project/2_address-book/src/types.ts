interface PhoneNumberDictionary {
    [phone: string]: { //어떤 키값이 오든간에 string으로 받는다
      num: number;
    };
  }
  
  interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
  }
  
  /*
    String을 직접 타이핑하다보면 오타가 발생할 수 있기 때문에
    속성으로 지정해준다
  
    고정된 3가지 번호 타입이 있다고 가정하면
  */
  enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio'
  }

  export {
    Contact,
    PhoneNumberDictionary,
    PhoneType
  };