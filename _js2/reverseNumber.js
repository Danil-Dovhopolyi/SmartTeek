function reverse(num) {
  return parseInt(String(num).split('').reverse().join('')) * Math.sign(num);
}
reverse(-12443);
