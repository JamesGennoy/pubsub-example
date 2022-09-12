function example() {
  console.log(this);
}

const bind =
  (func, context) =>
  (...args) =>
    func.apply(context, ...args);

const a = bind(example, { a: 1 });
a();
