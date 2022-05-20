/* the clear button will invoke the "clr" function with an empty string */
function clr() {
  document.getElementById("result").value = "";
}

/* function to view the numbers we type in the box */
function display(value) {
  document.getElementById("result").value += value;
}

/* function that will evaluate if the written text is a math, if yes, it calculates the operation */
function calculate() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
