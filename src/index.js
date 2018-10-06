module.exports = function count(s, pairs) {

  let N = pairs.reduce((result, current) => {
    result *= current[0] ** current[1];
    return result;
  }, 1);
  if (N > 10000000) return 0;
  const number = 1000000007;
  let answer = 0;
  let k_cond;
  let cond1, cond2;
  let temp;

  for (let k = 0; k < N; k++) {
    for (let j = 0; j < s.length; j++) {
      temp = gcd(k + j, N);
      cond1 = (s[j] === '1' && temp === 1);
      cond2 = (s[j] === '0' && temp !== 1);
      k_cond = (cond1 || cond2)
      if (!k_cond) break;
    }
    if (k_cond) answer += 1;
  }

  return answer % number;
}


function gcd(a, b) {
  while (a !== 0 && b !== 0) {
    if (a > b) a = a % b;
    else b = b % a;
  }
  return a + b;
}
