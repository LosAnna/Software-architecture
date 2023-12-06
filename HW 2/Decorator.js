function decorator(func) {
  let counter = 0;
  const dataArgs = new Set();
  const dataRes = new Set();
  const inner = (...args) => {
    args.forEach((a) => dataArgs.add(a));
    counter += 1;
    const result = func.apply(this, args);
    dataRes.add(result);
    return result;
  };
  inner.callCount = () => counter;
  inner.returned = (key) => dataRes.has(key);
  inner.wasCalledWith = (key) => dataArgs.has(key);
  return inner;
}

const fn = (a, b) => a + b;

const decoratedFn = decorator(fn);

console.log(decoratedFn(1, 2));
console.log(decoratedFn(1, 4));
console.log(decoratedFn(1, 3));
console.log(decoratedFn(1, 2));

console.log("Call count", decoratedFn.callCount());
console.log("returned with 4", decoratedFn.returned(4));
console.log("was called with 1, 3", decoratedFn.wasCalledWith(1, 3));
