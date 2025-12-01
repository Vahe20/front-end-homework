const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const curry = (fn) => {
    const arr = [];
    const cb = (...args) => {
        for (let arg of args) {
            cb.arr.push(arg);
            if (cb.arr.length >= fn.length) {
                cb.arr = [];
                return fn(...arr);
            }
        }
        
        return cb;
    }

    cb.arr = arr;

    return cb;
}

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3));
console.log(sumFunc(1, 2)(3));
console.log(sumFunc(1, 2, 3));

console.log(prodFunc(1, 2, 3, 4));
console.log(prodFunc(1)(2, 3, 4));
console.log(prodFunc(1, 2)(3, 4));
console.log(prodFunc(1, 2, 3)(4));