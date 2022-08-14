const buttons = document.getElementsByClassName("btn");
const clearBtn = document.getElementById("btn-clear");
const delBtn = document.getElementById("btn-del");
const display = document.getElementById("screen");
const press = document.getElementById("ok-btn");
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    display.value += event.target.innerText;
  });
}
clearBtn.addEventListener("click", function () {
  display.value = "";
});
press.addEventListener("click", function () {
  if (display.value === "") {
    display.value = "";
  } else {
    display.value = eval(display.value);
  }
});
delBtn.addEventListener("click", function () {
  const del = display.value.slice(0, -1);
  display.value = del;
});
