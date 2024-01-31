function factorial(num) {
  let product = 1;

  for(let i = num; i > 0; i--) {
    product = product * i;
  }


  return product;
  
}
// console.log(factorial(6));

module.exports = factorial;


