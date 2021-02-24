
function Calculator(){
    this.methods={
        '-' : (a,b) =>a-b,
        '+' : (a,b) =>a+b
    }
}

this.ExCalculator=function(str){

    let mas = str.split(' '),
        a=+split[0]
        op=split[1]
        b=+split

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
          }
      
          return this.methods[op](a, b);
        }
      
        this.addMethod = function(name, func) {
          this.methods[name] = func;
        };


let ExCalculator = new Calculator
ExCalculator.addMethod("*", (a, b) => a * b);
ExCalculator.addMethod("/", (a, b) => a / b);
ExCalculator.addMethod("**", (a, b) => a ** b);

let x=prompt('введите тействие')
let result = ExCalculator.Calculate(x)
console.log(x)
console.log(result)

