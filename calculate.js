const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");
const operand = document.getElementById("operand");
const options = document.getElementById("category");
const answer = document.getElementById("answer");

function Calculator() {
   if (options.value == "simple") {
      calculateSimpleMath(val1.value, val2.value, operand.value);
   }
   if (options.value == "circ") {
      calculateCircleCircumference(val1.value);
   }
   if (options.value == "radius") {
      calculateCircleRadius(val1.value);
   }
   if (options.value == "rect") {
      calculateRectangleArea(val1.value, val2.value);
   }
}

function calculateCircleCircumference(circumference) {
   answer.value = ((circumference * 2) / 4) * Math.PI;
   console.log(answer.value);
}

function calculateCircleRadius(radius) {
   answer.value = Math.PI * radius * radius;
   console.log(answer.value);
}

function calculateCircleDiameter(diameter) {
   answer.value = 0.25 * Math.PI * diameter * diameter;
   console.log(answer.value);
}

function calculateRectangleArea(length, width) {
   answer.value = length * width;
   console.log(answer.value);
}

function calculateSimpleMath(val1, val2, operator) {
   switch (operator) {
      case "+":
         answer.value = parseInt(val1) + parseInt(val2);
         break;
      case "-":
         answer.value = val1 - val2;
         break;
      case "*":
         answer.value = val1 * val2;
         break;
      case "/":
         answer.value = Math.floor(val1 / val2);
         break;
      default:
         answer.value = 0;
   }
}
