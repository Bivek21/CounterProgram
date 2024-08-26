const deacreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

//increase button
increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

//decrease Button
deacreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

//reset Button
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
