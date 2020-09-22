const add = (x, y) => {
    return x + y
}

const sub = (x, y) => {
    return x - y
}

const mul = (x, y) => {
    return x * y
}

const div = (x, y) => {
    return x / y
}

const calc = (e, x, y) => {
    if (e === '+') {
        return add(x, y)
    } else if (e === '-') {
        return sub(x, y)
    } else if (e === '*') {
        return mul(x, y)
    } else if (e === '/') {
        return div(x, y)
    } else {
        alert('error')
    }
}

let nb1 = calc('+', 10, 11) 
let nb2 = calc('-', 6, 4) 
let nb3 = calc('*', 4, 5) 
let nb4 = calc('/', 10, 2) 

console.log([nb1, nb2, nb3, nb4])