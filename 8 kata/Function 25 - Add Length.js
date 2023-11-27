function addLength(str) {
    const result = str.split(' ').map((word) => `${word} ${word.length}`)
    return result
  }
  