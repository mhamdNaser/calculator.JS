class analysNum {
  constructor() {
    this.operation = []
    this.numbers = []
  }

  analysis( regex , allinput ) {

    // save operation in array
    for (var i = 0; i < allinput.length; i++) {
      if (isNaN(allinput[i])) {
        this.operation.push(allinput[i]);
      }
    }

    // save number in array
    var number = allinput.split(regex);
    for (var i = 0; i < number.length; i++) {
      var word = parseInt(number[i]);
      this.numbers.push(word);
    }

    // return operation array and number array
    return {
      numbers: this.numbers,
      operation: this.operation
    };
  }
}
