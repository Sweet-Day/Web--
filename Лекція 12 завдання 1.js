function Sum() {
    let array = [];
    while (true) {
        let value = prompt("Введіть число : ", 0);
        if (value === "" || value === null || !isFinite(value)) break;
     array.push(+value);
    }
    let sum = 0;
    for (let num of array) {
      sum += num;
    }
    return sum;
  }
  console.log( Sum() );