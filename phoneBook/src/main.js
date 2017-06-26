// Приложение телефонный справочник

// Создайте функцию конструктор.
// У данной функции должны быть методы:
// Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
// Проверка, что телефонный номер содержит только числа
// Добавление пользователей в объект
// Удаление пользователя по имени, фамилии
// Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
// Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
// Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
// Фильтр по указанному свойству




// Create constructor function

class PhoneBook {
  constructor() {
    this.users = [];
    this.id = 0;
  }

// Converting a phone number

  convertingNumber(num) {
    if (this.checkNumber(num)) {
      if (num.length == 10) {
        let part1 = num.slice(0, 3);
        let part2 = num.slice(3, 5);
        let part3 = num.slice(5, 7);
        let part4 = num.slice(7);
        return `(${part1}) ${part2}-${part3}-${part4}`;
      }
    } else {
      return false;
    }
  }

// Check Number

  checkNumber(num) {
    if (num == NaN) {
      return false
    } else {
      return true
    }
  }



// Add new contact

  addUser(Name, Surname, num) {
    let NewNumber = this.convertingNumber(num);
    if (NewNumber) {
      if (this.users.every(elem => elem.number != NewNumber)) {
        this.id++;
        this.users.push({
          name: Name,
          SecondName: Surname,
          number: NewNumber,
          id: this.id
        });
      } else {
        console.log("Contact already exists");
      }
    } else {
      console.log("Incorrect number");
    }
  }


// Delete User

  deleteUser(Name, Surname) {
    this.users = this.users.filter(elem => {
      return elem.name != Name && elem.SecondName != Surname;
    });
  }


  // Search


  searchContacts(search) {
    return this.users.filter(elem => {
      let indexName = elem.name.indexOf(search);
      let indexSecondName = elem.SecondName.indexOf(search);
      return indexName !== -1 || indexSecondName !== -1;
    });
  }


//Change


  changeContact(id, param, newValue) {
    this.users.forEach(elem => {
      if (elem.id === id) {
        if (param === "number") {
          if (this.formatNum(newValue)) {
            elem.number = this.formatNum(newValue);
          } else console.error("Incorrect number");
        } else elem[param] = newValue;
      }
    });
  }
  



// Sort

  sortContacts(param) {
    this.users.sort((a, b) => (a[param] > b[param] ? 1 : -1));
  }



}


let Friends = new PhoneBook();
Friends.addUser("Aleksei", "Merezhko", "0932960212");
Friends.addUser("Artyom", "Bykov", "0504568325");
Friends.addUser("Stas", "Tyupin", "0636784311");
Friends.addUser("Sasha", "Kovalchuk", "0334568933");
Friends.addUser("Roman", "Stint", "0636784311");
Friends.deleteUser("Sasha", "Kovalchuk");

