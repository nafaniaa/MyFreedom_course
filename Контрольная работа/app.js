// 1. Написать защищённый класс. Реализовать гет и сет. Сделать 2 экземпляра этого класса.
// class CreditCard{
// _balance=0

// set _balance(money){
//     if(money<0) throw new Error("Ля, ну всё, деньги закончились, иди работай")
//     this._balance=money
// }

// get _balance(){
//     return this._balance
// }

// constructor(name,age){
//     this.name=name
//     this.age=age
// }

// }


// let user1 = new CreditCard( name='Sasuke', age='28')
// user1._balance=300
// console.log(user1)

// let user2 = new CreditCard( name='Naruto', age='27')
// user2._balance=500
// console.log(user2)

// -----------------------------


//2. Создать константный класс с конструктором и реализовать 1 экземпляр.
// const Student= class{
//     course=1
//     age=18
//     profile='Maths'
// }


// const marina=new Student
//     console.log(marina)

// -----------------------------

// 5. Создать 2 вида функции(с реторном и без)
// let mass = [10 ,9,55,66,77,88,99,1,4,5,6,7]

// function OrdefOfNumbers(a,b){
//     if(a>b) return 1
//     if(a==b) return 0
//     if(a<b) return -1
// }

// mass.sort(OrdefOfNumbers)
// console.log(mass)


// function hello(userName){
//      userName ='Valera'
//     alert('Hello'+userName)
// }
// hello()

// -----------------------------

//6. Реализовать объект и парочку его методов.

// let Animal={
//     paws:true,
//     tail:false
// }

// let animal1 = Object.create(Animal)
// console.log(animal1)

// console.log(Object.getOwnPropertyNames(Animal))


// -----------------------------


//7. Реализовать 5 методов массивов на свой вкус и описать каждый из них. И скажите,почему выбрали их.

// let mass = [10 ,9,55,66,77,88,99,1,4,5,6,7]

// delete mass[1] // удаляет элемент и оставляет ячейку пустой
// console.log(mass)

// console.log(mass.length)//длина массива

// mass.splice(1,2)//удаляет два элемента с первого индекса 
// console.log(mass)

// let arr=mass.slice(2,4)// переносит элементы со второго по четвёртый индексы в другой массив
// console.log(arr)

// console.log(mass.indexOf(99))// выводит индекс элемента 99

// -----------------------------


//8. Задание на гуглинг. Создать файл с помощью JS и записать в него 2 переменные.
// в HTML  коде

//3. А что такое node.js? В наши дни платформа Node.js является одной из самых популярных платформ для построения эффективных и масштабируемых REST API's. Она так же подходит для построения гибридных мобильных приложений, десктопных программ и даже для IoT.

//4. Что такое DOM? Связывает JS с HTML
//9,10. Что важнее всего в css и html? Всё важно.