/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь
 - Гость
 - База данных
 - База хранит информацию о пользователях ------
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 *
 * */


user = {
 name: 'Alex',
 age: 17,
 email: 'aleksei.merezhko@mail.ru'
 
}
admin = {
  email: 'admin@mail.ru'
}
guest = {
login: 'sd',
pass: '222'

}
database = {
  passvord: '123'
}

database.__proto__ = user

user.__proto__ = admin

guest.__proto__ = database




