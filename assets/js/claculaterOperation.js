class calculaterOperation {

  constructor() {
    this.newNumber = 0;
    this.memory = [];
    this.regnumber = new RegExp("^[0-9]+$");
    this.regoperator = new RegExp("[-/*-+()]");
    this.firstNumber = document.getElementById("operInput");
    this.memoryArea = document.getElementById("memoryArea");
  }

  // caculater Operation 
  operator = (num) => {
    if (
      this.firstNumber.value == 0 &&
      this.firstNumber.value == this.regnumber
    ) {
      this.firstNumber.value = num;
    } else if (num == "c") {
      this.firstNumber.value = "";
    }else if (num == "<-") {
      let newvalue = this.firstNumber.value.slice(0, -1)
      this.firstNumber.value = newvalue
    } else if (num == "m" ) {
      memoryArea.innerHTML = "";
      if (this.memory.length >= 5) {
        this.memory.pop(); // Remove the new element from the array
      } else{
        if(this.firstNumber.value.match(this.regnumber) ){
          this.memory.push(this.firstNumber.value);
        }else{
          alert("Only Number")
        }
      }
      this.memory.map((e) => {
        var button = document.createElement("button");
        button.textContent = e;
        this.memoryArea.appendChild(button);
        button.onclick = () => { 
          calcuOperat.operator(e);
          this.memory = this.memory.filter((memory) => memory !== e);
          button.parentNode.removeChild(button); // Remove the clicked button from the DOM
        } 
      });
      this.firstNumber.value = "";
    } else if (num == "de") {
      this.memory = []
      memoryArea.innerHTML = "";
      this.firstNumber.value = "";
    } else if (num == "=") {
      this.equal()
    } else {
      this.newNumber = this.firstNumber.value + num;
      this.firstNumber.value = this.newNumber;
    }
  };

  // calculat result and output Result
  equal = () => {
    const analysnum = new analysNum();
    const calculator = new Calculator();

    var allnumber = this.firstNumber.value;

    // anylsis input to number and operation and calculat it
    const myInput = analysnum.analysis(this.regoperator, allnumber);
    const result = calculator.performOperations(myInput);

    this.firstNumber.value = "";
    this.firstNumber.value = result;
  };
}
