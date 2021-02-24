//2
function reverseNumber(a) {
    if (a > 0) {
        return +a.toString().split('').sort(function (a, b) { return b - a }).join('')

        // let str = String(a)
        // let array = str.split()
        // let newArray = array.sort()
        // let str2 = newArray.join(',')
        // //    return str2
        // console.log(str2)


    }

}
// let num = +prompt('Введите число')
console.log(reverseNumber(123408776));

// reverseNumber(34981244);

