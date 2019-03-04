//*************************************
var a = parseFloat(document.getElementById('a').value);
var b = parseFloat(document.getElementById('c').value);
var c = parseFloat(document.getElementById('b').value);

function quadraticformula() {
  var output = document.getElementById('output');

  if (isNaN(Anum) || isNaN(Bnum) || isNaN(Cnum)) {
    output.textContent = "you did not enter a proper digit. please try again.";
  }
  else {
      var stepone = b ** 2
      var steptwo = 4 * a * c
      var stepthreea = stepone - steptwo
      var stepthreeb = stepthreea ** .5
      var stepfour = 2 * a
      var stepfivea = -b + stepthreeb
      var stepfiveb = -c - stepthreeb
      var stepsixa = stepfivea / stepfour
      var stepsixb = stepfiveb / stepfour
      output.textContent = "your answer is x = " + stepsixa + " , " + stepsixb;
  }
};
//***********************************************
function quadraticgraph() {
  function fun1(x) {return x= (-b + math.sqrt{(b) ^ 2 - 4 * a * c}) / 2 * a}
  function draw() {
   var canvas = document.getElementById("canvas");
   if (null==canvas || !canvas.getContext) return;

   var axes={}, ctx=canvas.getContext("2d");
   axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
   axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
   axes.scale = 10;                 // 40 pixels from x=0 to x=1
   axes.doNegativeX = true;

   showAxes(ctx,axes);
   funGraph(ctx,axes,fun1,"rgb(11,153,11)",1);
  }

  function funGraph (ctx,axes,func,color,thick) {
   var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
   var iMax = Math.round((ctx.canvas.width-x0)/dx);
   var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
   ctx.beginPath();
   ctx.lineWidth = thick;
   ctx.strokeStyle = color;

   for (var i=iMin;i<=iMax;i++) {
    xx = dx*i; yy = scale*func(xx/scale);
    if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
    else         ctx.lineTo(x0+xx,y0-yy);
   }
   ctx.stroke();
  }

  function showAxes(ctx,axes) {
   var x0=axes.x0, w=ctx.canvas.width;
   var y0=axes.y0, h=ctx.canvas.height;
   var xmin = axes.doNegativeX ? 0 : x0;
   ctx.beginPath();
   ctx.strokeStyle = "rgb(128,128,128)";
   ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
   ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
   ctx.stroke();
  }
};
