# JavaScript Interview Questions and Answers

## 1. Implement the `compose()` and `pipe()` polyfill

### Explanation:
`compose()` and `pipe()` are utility functions used to compose multiple functions together.
- `compose()` executes functions from right to left.
- `pipe()` executes functions from left to right.

### Code:
```javascript
const compose = (...funcs) => (value) => funcs.reduceRight((acc, fn) => fn(acc), value);
const pipe = (...funcs) => (value) => funcs.reduce((acc, fn) => fn(acc), value);

// Example usage:
const add = (x) => x + 1;
const multiply = (x) => x * 2;

console.log(compose(add, multiply)(5)); // 11
console.log(pipe(add, multiply)(5));    // 12
```

---

## 2. Promises (Polyfill for `Promise.all`, `Promise.race`, `Promise.allSettled`)

### Explanation:
- `Promise.all` waits for all promises to resolve or rejects if one fails.
- `Promise.race` resolves or rejects as soon as one of the promises settles.
- `Promise.allSettled` waits for all promises and returns their results regardless of rejection.

### Code:
```javascript
Promise.allPolyfill = function(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = value;
                completed++;
                if (completed === promises.length) resolve(results);
            }).catch(reject);
        });
    });
};

Promise.racePolyfill = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => Promise.resolve(promise).then(resolve, reject));
    });
};

Promise.allSettledPolyfill = function(promises) {
    return Promise.all(promises.map(p => Promise.resolve(p).then(
        value => ({ status: 'fulfilled', value }),
        reason => ({ status: 'rejected', reason })
    )));
};
```

---

## 3. Implement the `map`, `filter`, `reduce`, and `forEach` polyfills

### Explanation:
- `map` creates a new array with results of calling a function on each element.
- `filter` creates a new array with elements that pass the test.
- `reduce` applies a function to an accumulator and each element.
- `forEach` executes a function for each array element.

### Code:
```javascript
Array.prototype.mapPolyfill = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

Array.prototype.filterPolyfill = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) result.push(this[i]);
    }
    return result;
};

Array.prototype.reducePolyfill = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

Array.prototype.forEachPolyfill = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
```

---

## 4. Implement `Function.prototype.bind`, `call`, and `apply` methods

### Explanation:
- `call` invokes a function with a given `this` and arguments.
- `apply` is similar to `call` but takes an array of arguments.
- `bind` returns a new function with `this` bound to a specific value.

### Code:
```javascript
Function.prototype.callPolyfill = function(context, ...args) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
};

Function.prototype.applyPolyfill = function(context, args = []) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
};

Function.prototype.bindPolyfill = function(context, ...args) {
    const fn = this;
    return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};
```

---

## 5. Implement `Async.parallel` and `Async.series` for executing async tasks

### Explanation:
- `Async.parallel` executes multiple asynchronous tasks in parallel and collects results.
- `Async.series` executes tasks one after another in sequence.

### Code:
```javascript
const asyncParallel = (tasks, callback) => {
    let results = [];
    let completed = 0;
    tasks.forEach((task, index) => {
        task((result) => {
            results[index] = result;
            completed++;
            if (completed === tasks.length) callback(results);
        });
    });
};

const asyncSeries = (tasks, callback) => {
    let results = [];
    const executeTask = (index) => {
        if (index === tasks.length) return callback(results);
        tasks[index]((result) => {
            results.push(result);
            executeTask(index + 1);
        });
    };
    executeTask(0);
};
```

---

## 6. Build a Promise from scratch

### Explanation:
A custom `Promise` implementation with `resolve`, `reject`, and `then`.

### Code:
```javascript
class MyPromise {
    constructor(executor) {
        this.callbacks = [];
        this.state = 'pending';
        this.value = undefined;

        const resolve = (value) => {
            this.state = 'fulfilled';
            this.value = value;
            this.callbacks.forEach(cb => cb(value));
        };

        executor(resolve);
    }

    then(callback) {
        if (this.state === 'fulfilled') {
            callback(this.value);
        } else {
            this.callbacks.push(callback);
        }
    }
}
```

---

## 7. Implement a Retry API

### Explanation:
Retries an asynchronous function a given number of times before failing.

### Code:
```javascript
const retry = (fn, retries = 3, delay = 1000) => {
    return new Promise((resolve, reject) => {
        const attempt = (count) => {
            fn()
                .then(resolve)
                .catch((err) => {
                    if (count === 0) return reject(err);
                    setTimeout(() => attempt(count - 1), delay);
                });
        };
        attempt(retries);
    });
};
```

---

## 8. Implement Memoization

### Explanation:
Memoization is an optimization technique that caches results of expensive function calls.

### Code:
```javascript
const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
};
```

---

## 9. Currying (with examples)

### Explanation:
Currying transforms a function that takes multiple arguments into a series of functions.

### Code:
```javascript
const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    };
};

// Example usage:
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
```
---

## 10. Implement `String.prototype.repeat`

### Explanation:
The `repeat()` method constructs and returns a new string containing the specified number of copies of the string on which it was called.

### Code:
```javascript
if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
        if (count < 0 || count === Infinity) throw new RangeError('Invalid count value');
        return new Array(count + 1).join(this);
    };
}

// Example usage:
console.log('hello '.repeat(3)); // 'hello hello hello '
```



