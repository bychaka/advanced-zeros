module.exports = function getZerosCount(number, base) {
  // your implementation
  let result = [];
  for (let i = 2; i <= base; i++){
    if (base % i === 0){
      let divider_1 = 0;
      while (base % i === 0){
        divider_1++;
        base /= i;
      }
      let divider_2 = 0;
      let count_divider = number;
      while (count_divider / i > 0){
        divider_2 += count_divider / i;
        count_divider /= i;
      }
      result.push(divider_2/divider_1);
    }
  }
  return (Math.max.apply(null, result));
}