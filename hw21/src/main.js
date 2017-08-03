let solution = (arg) => {
  let Arr = [];
  arg.split('').forEach((val) => Arr.unshift(+val));
  Arr = Arr.map((val, ind) => {
    if (ind % 2 == 1) {
      return (val * 2 > 9 ? ((val * 2) % 10) + 1 : val * 2);
    } else {
      return val;
    }
  }).reduce((sum, val) => sum += val, 0);
  return !(Arr % 10);
}

console.log(solution("4408041234567893"));
console.log(solution("1234567890123456"));
console.log(solution("4408042234567893"));
console.log(solution("38520000023237"));
console.log(solution("4222222222222"));