//*************************************
function quadraticformula() {
  var Anum = parseFloat(document.getElementById('Anum').value);
  var Bnum = parseFloat(document.getElementById('Bnum').value);
  var Cnum = parseFloat(document.getElementById('Cnum').value);

  var output = document.getElementById('output');

  if (isNaN(Anum) || isNaN(Bnum) || isNaN(Cnum)) {
    output.textContent = "you did not enter a proper digit. please try again.";
  }
  else {
      var stepone = Bnum ** 2
      var steptwo = 4 * Anum * Cnum
      var stepthreea = stepone - steptwo
      var stepthreeb = stepthreea ** .5
      var stepfour = 2 * Anum
      var stepfivea = -Bnum + stepthreeb
      var stepfiveb = -Bnum - stepthreeb
      var stepsixa = stepfivea / stepfour
      var stepsixb = stepfiveb / stepfour
      output.textContent = "your answer is x = " + stepsixa + " , " + stepsixb;
  }
};
