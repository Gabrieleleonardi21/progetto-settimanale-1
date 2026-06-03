const overlay = document.getElementById("overlay-contatti");

function apriModal() {
  overlay.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
}

function chiudiModal() {
  overlay.setAttribute("hidden", "");
  document.body.style.overflow = "";
}

document.getElementById("apri-contatti").addEventListener("click", apriModal);

document.getElementById("chiudi-contatti").addEventListener("click", chiudiModal);

overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    chiudiModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    chiudiModal();
  }
});

document.querySelector(".modal form").addEventListener("submit", function (event) {
  event.preventDefault();
  this.setAttribute("hidden", "");
  document.getElementById("successo").removeAttribute("hidden");
});
