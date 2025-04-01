function phraseWithTimeOut(someText, milisec) {
    setTimeout(() => {
      console.log(someText);
    }, milisec);
  }
  
phraseWithTimeOut("Time out is over", 5000);