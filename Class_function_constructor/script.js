// function User(name,id){
// this.name = name
// this.id = id
// this.human = true
// this.hello = function(){
//     console.log(`Hello,${this.name}`)
// }
// }

// User.prototype.exit = function(){
//     console.log(`Пользователь ${this.name} вышел`)
// }

// const alisa = new User('Alisa',202)
// const tanya = new User('Tanya',16)
// console.log(tanya)
// console.log(alisa)

// alisa.hello()
// tanya.hello()

// alisa.exit()

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    calsArea() {
        return this.width * this.height
    }
}

const sanya = new Rectangle(10,10)
console.log(sanya.calsArea())

class ColorRectangleWithText extends Rectangle{
    constructor(width,height,color,text){
        super(width,height)//вызывает своёства родителя
        this.color = color
        this.text = text

    }
    showMyProps(){
        console.group(`Текст: ${this.text}, цвет: ${this.color}`)
    }
}

const div = new ColorRectangleWithText(25,10, 'Привет', 'red')
div.showMyProps()