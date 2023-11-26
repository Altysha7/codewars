var findAverage = function (nums) {
    // Code here
    const total = nums.reduce((acc, number) => acc + number, 0)
    return total / nums.length
  }