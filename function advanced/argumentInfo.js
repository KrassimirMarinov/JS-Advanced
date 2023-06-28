function solve() {
  const arg = Array.from(arguments);
  const count = new Map();
  arg.forEach((element) => {
    const type = typeof element;
    console.log(`${type}: ${element}`);
    if (!count.has(type)) {
      count.set(type, 0);
    }
    count.set(type, count.get(type) + 1);
  });

  Array.from(count.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach((element) => console.log(`${element[0]} = ${element[1]}`));
}
solve("cat", 42, function () {
  console.log("Hello world!");
});
