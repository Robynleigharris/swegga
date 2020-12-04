function totalcost(num1, num2) {
  y = parseFloat(document.getElementById("female_amount").value);
  var answer = document.getElementById("female_result");
  answer.value = 150.95 * y;
  x = parseFloat(document.getElementById("male_amount").value);
  var answer1 = document.getElementById("male_result");
  answer1.value = 180.95 * x;
  num1 = parseFloat(document.getElementById("female_result").value);
  num2 = parseFloat(document.getElementById("male_result").value);
  var answer2 = document.getElementById("end_result");
  answer2.value = num1 + num2;
}
