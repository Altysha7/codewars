function mainDiagonalProduct(mat){
  // ...
  let b = 1
  mat.forEach((a, j) => {
    b *= a[j];
  })
  return b
}