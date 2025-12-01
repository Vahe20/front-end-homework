function foo(a, b) {
    return a + b;
}

function trace(fn) {
    const history = [];

    const tracedFunc = (a, b) => {
        const res = fn(a, b);
        history.push({ args: [a, b], output: res});
        return res;
    }
    
    tracedFunc.history = history;
    return tracedFunc;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2));

console.log(tracedFunc(2, 4, 6));

console.log(tracedFunc.history);