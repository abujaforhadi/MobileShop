const price=["10990 Tk","20990 Tk"]
document.getElementById("demo").onmouseover = function() {mouseDown()};
function mouseDown() {
  document.getElementById("demo").innerHTML = price[0];
}