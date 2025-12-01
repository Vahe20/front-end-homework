const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const pipe = (...fns) => {
    return (num) => {
        for (const fn of fns) {
            num = fn(num);
        }

        return num;
    }
}

const func = pipe(add5, add5, double, sub4);
console.log(func(2));