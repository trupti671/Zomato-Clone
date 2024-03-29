var left3 = document.getElementById("left3");
var right3 = document.getElementById("right3");
var slider3 = document.getElementById("slider3");

var t3 = 1;
var mg = -280;

right3.addEventListener("click", () => {
  if (t3 == 1) {
    slider3.style.marginLeft = mg + "px";
    t3++;
  } else if (t3 == 2) {
    slider3.style.marginLeft = mg * 2 + "px";
    t3++;
  } else if (t3 == 3) {
    slider3.style.marginLeft = mg * 3 + "px";
    t3++;
  } else if (t3 == 4) {
    slider3.style.marginLeft = mg * 4 + "px";
  }
});

left3.addEventListener("click", () => {
  if (t3 == 4) {
    slider3.style.marginLeft = mg * 3 + "px";
    t3--;
  } else if (t3 == 3) {
    slider3.style.marginLeft = mg * 2 + "px";
    t3--;
  } else if (t3 == 2) {
    slider3.style.marginLeft = mg + "px";
    t3--;
  } else if (t3 == 1) {
    slider3.style.marginLeft = "0px";
  }
});
