const intervalArr = process.argv.slice(2)
const timer = function (arr) {
  for (const interval of intervalArr) {
    if (!isNaN(interval) && (interval) > 0) {
      setTimeout(() => process.stdout.write('\x07'), interval * 1000)
    }
  }
};

timer(intervalArr);





