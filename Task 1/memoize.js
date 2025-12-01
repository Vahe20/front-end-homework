const factorial = num => {
    if (!num) return 1;
    return num * factorial(num-1);
}

function memoize(fn) {
    const map = new Map();

    return (num) => {
        if (map.has(num)) {
            return map.get(num);
        }
        const result = fn(num);
        map.set(num, result);
        return result;
    };
}

const foo = memoize(factorial);

console.log(foo(5));
