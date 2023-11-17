function fakeBin(x){

    
    // return x.split('').map(n => n < 5 ? 0 : 1).join('');

    const fakeChar = x.split('')
    
    for( let i = 0; fakeChar.length > i; i++){
      if(parseInt(fakeChar[i]) < 5){
          fakeChar[i] = '0'
      } else {
        fakeChar[i] = '1'
      }
    }
    return fakeChar.join('')
  }