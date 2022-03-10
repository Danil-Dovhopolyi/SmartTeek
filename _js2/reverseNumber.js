function reverse(num) {
  return parseInt(String(num).split('').reverse().join('')) * Math.sign(num);
}
console.log(reverse(-12443));
