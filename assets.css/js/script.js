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

const overlayConferma = document.getElementById("overlay-conferma");
let datiForm = {};

document.querySelector(".modal form").addEventListener("submit", function (event) {
  event.preventDefault();

  datiForm = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    motivo: document.getElementById("motivo-contatto").value,
    data: document.getElementById("date").value,
    messaggio: document.getElementById("messaggio").value,
  };

  const riepilogo = document.getElementById("riepilogo");
  riepilogo.innerHTML = "";
  const campi = [
    ["Nome", datiForm.nome],
    ["Email", datiForm.email],
    ["Motivo", datiForm.motivo],
    ["Data", datiForm.data],
    ["Messaggio", datiForm.messaggio],
  ];
  campi.forEach(function (coppia) {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = coppia[0] + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(coppia[1]));
    riepilogo.appendChild(p);
  });

  overlayConferma.removeAttribute("hidden");
});

document.getElementById("conferma-invio").addEventListener("click", function () {
  const contenuto = document.getElementById("dati-contenuto");
  contenuto.innerHTML = "";
  const campi = [
    ["Nome", datiForm.nome],
    ["Email", datiForm.email],
    ["Motivo", datiForm.motivo],
    ["Data", datiForm.data],
    ["Messaggio", datiForm.messaggio],
  ];
  campi.forEach(function (coppia) {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = coppia[0] + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(coppia[1]));
    contenuto.appendChild(p);
  });

  document.getElementById("dati-salvati").removeAttribute("hidden");
  overlayConferma.setAttribute("hidden", "");
  chiudiModal();
});

document.getElementById("annulla-invio").addEventListener("click", function () {
  overlayConferma.setAttribute("hidden", "");
});

document.getElementById("chiudi-dati").addEventListener("click", function () {
  document.getElementById("dati-salvati").setAttribute("hidden", "");
});
