function average(numbers) {
  numbers = numbers.filter(element => element)
  return numbers.reduce((p, c)=> p+c, 0) / numbers.length;
}

module.exports = {average};
