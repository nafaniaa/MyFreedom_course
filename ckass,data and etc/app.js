class User{
    constructor(surname){
        this.surname=surname
    }
    #privatka='id'
    set privatka(id){
        this.#privatka=id 
    }
    get privatka(){
        return this.#privatka
    }
    set surname(surname){
        alert(this.#privatka+'11')
      this._surname=surname.trim().toLowerCase()
    }
    get surname(){
      return this._surname
    }
    
}
const student = new User()
student.surname='  Лvanjehvih'
console.log(student)
comsole.log(student.surname)