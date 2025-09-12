function claro() {
  document.querySelector(".container").style.backgroundColor = "white";
  document.querySelector(".title").style.color = "black";
  document.querySelector(".title").textContent = "Bom Dia 🌞";
}

function reset() {
  document.querySelector(".container").style.backgroundColor = "lightgray";
  document.querySelector(".title").style.color = "black";
  document.querySelector(".title").textContent = "Boa Tarde 🌻";
}

function escuro() {
  document.querySelector(".container").style.backgroundColor = "black";
  document.querySelector(".title").style.color = "white";
  document.querySelector(".title").textContent = "Boa Noite 😴";
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


