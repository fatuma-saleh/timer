const intervalArr = process.argv.slice(2)

const timer = function (arr) {
  for (let interval of intervalArr) {
    console.log(Number(interval))
    if ((Number(interval) !== "") && (Number(interval) >= 0) && (typeof Number(interval) === "number")) {
      setTimeout(() => process.stdout.write('\x07'), Number(interval) * 1000)
    }
  }
};
timer(intervalArr);





