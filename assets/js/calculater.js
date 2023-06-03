class Calculator {
  constructor() {
    this.numbers ;
    this.operators;
  }

  // sort operation important
  getPrec(operator) {
    if (operator === "*" || operator === "/") {
      return 2;
    } else if (operator === "+" || operator === "-") {
      return 1;
    } else {
      return 0; // Invalid operator
    }
  }

  // do operation
  performOperations( object ) {

    let nums = object.numbers
    let ops = object.operation

    // Loop until there are no more operators
    while (ops.length > 0) {
      let highestPrecedenceIndex = 0;
      let highestPrecedence = this.getPrec(ops[0]);

      // Find the operator with the highest precedence
      for (let i = 1; i < ops.length; i++) {
        const precedence = this.getPrec(ops[i]);

        if (precedence > highestPrecedence) {
          highestPrecedence = precedence;
          highestPrecedenceIndex = i;
        }
      }

      // Perform the operation with the highest precedence
      const operator = ops.splice(highestPrecedenceIndex, 1)[0];
      const num1 = nums.splice(highestPrecedenceIndex, 1)[0];
      const num2 = nums.splice(highestPrecedenceIndex, 1)[0];
      let result;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          throw new Error("Invalid operator");
      }

      // Insert the result back into the number array
      nums.splice(highestPrecedenceIndex, 0, result);
    }

    // The final result will be the first and only element in the number array
    return nums[0];
  }
}
