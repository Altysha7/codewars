function nbYear(p0, percent, aug, p) {
    // your code
  let year = 0
  while (p0 <= p){
    p0 += Math.floor(p0 * percent / 100) + aug 
    year++
  }
  
  return year
  
}