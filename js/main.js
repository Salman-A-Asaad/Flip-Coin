let heads = 0;
let tails = 0;
let flip = document.querySelector(".flip-img");
let flipBtn = document.querySelector("#flip");
let resetBtn = document.querySelector("#reset");

flipBtn.addEventListener("click", () => {
  let i = new Date().getSeconds();
  flip.style.animation = "none";
  if (i % 2 == 1) {
    setTimeout(function () {
      flip.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      flip.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }
  setTimeout(updateStats, 3000);
  disableButton();
});

function updateStats() {
  document.querySelector("#heads").innerHTML = ` ${heads}`;
  document.querySelector("#tails").innerHTML = ` ${tails}`;
}

function disableButton() {
  flipBtn.style.pointerEvents = "none";
  setTimeout(function () {
    flipBtn.style.cursor = "pointer";
    flipBtn.style.pointerEvents = "auto";
  }, 3000);
}

resetBtn.addEventListener("click", () => {
  flip.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});
