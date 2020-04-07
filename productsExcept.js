function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length <= 1) {
    throw new Error('Input array must have at least 2 numbers');
  }
  //start with a list of products starting from the left
  let products = [], productSoFar = 1;
  
  for (let i = 0; i < intArray.length; i++) {
    products[i] = productSoFar;
    productSoFar *= intArray[i];
  }
  
  //multiply those by products starting from the right
  
  productSoFar = 1;
  
  for (let j = intArray.length - 1; j >= 0; j--) {
    products[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return products;
}