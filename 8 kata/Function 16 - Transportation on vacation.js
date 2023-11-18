function rentalCarCost(d) {
    // Your solution here
    const dailyRent = 40
    let totalAmount = dailyRent * d
    if(d >= 7) {
      totalAmount -= 50
    } else if (d >= 3) {
      totalAmount -=20
    }
    return totalAmount
}