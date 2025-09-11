function claro() {
  document.querySelector(".container").style.backgroundColor = "white";
}

function reset() {
  document.querySelector(".container").style.backgroundColor = "lightgray";
}

function escuro() {
  document.querySelector(".container").style.backgroundColor = "black";
}

document.querySelector("#claro").addEventListener("mouseenter", () => {
  document.querySelector(".claro").style.display = "none";
  document.querySelector("#sol").style.display = "inline";
});

document.querySelector("#claro").addEventListener("mouseleave", () => {
  document.querySelector(".claro").style.display = "inline";
  document.querySelector("#sol").style.display = "none";
});

document.querySelector("#escuro").addEventListener("mouseenter", () => {
  document.querySelector(".escuro").style.display = "none";
  document.querySelector("#lua").style.display = "inline";
});

document.querySelector("#escuro").addEventListener("mouseleave", () => {
  document.querySelector(".escuro").style.display = "inline";
  document.querySelector("#lua").style.display = "none";
});


