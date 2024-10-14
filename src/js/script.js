//---------------- CARD 1 MOSTRANDO TELEFONES
const telefone = document.querySelector(".verTelefone");
const telefone2 = document.querySelector(".verTelefone2");

const tel = "(11) 91919-9191";
const tel2 = "(11) 92929-9292";

telefone.addEventListener("click", (event) => {
  event.preventDefault();
  if (telefone.innerHTML === "ver telefone") {
    telefone.innerHTML = tel;
  } else {
    telefone.innerHTML = "ver telefone";
  }
});

telefone2.addEventListener("click", (event) => {
  event.preventDefault();
  if (telefone2.innerHTML === "ver telefone") {
    telefone2.innerHTML = tel2;
  } else {
    telefone2.innerHTML = "ver telefone";
  }
});

//----------------------- CARD 2 - MÁSCARA DE CPF
let cpf = document.querySelector("#cpf");

function mascara(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    //define somente a digitação de numeros
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";
}

//----------------------- CARD 2 - MÁSCARA DE TELEFONE

$(document).ready(function () {
  $("#telMsg").mask("(99) 99999-9999");
});

//----------------------CARD 2 - ALERT AO CLICAR NO BOTAO

const btnMessage = document.querySelector(".btnMessage");

btnMessage.addEventListener("click", (event) => {
  alert("Mensagem enviada com sucesso!");
});

btnMessage.value = "";

//limpando formulário após envio de informações
function limpar() {
  $("input").val("");
  $("textarea").val("");
}

//------------------- CARD 3 - REGRA DE TRES
const btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", (event) => {
  const valor1 = Number(document.getElementById("valor1").value);
  const valor2 = Number(document.getElementById("valor2").value);
  const valor3 = Number(document.getElementById("valor3").value);

  const resultado = (valor2 * valor3) / valor1;
  document.getElementById("btnResult").value = resultado.toFixed(2);
});

//----------------------- CARD 4 - ABRINDO MODAL

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//---------------------- CARD 5 - CAPTURA DE TELA

document.getElementById("capturar").addEventListener("click", function () {
  html2canvas(document.getElementById("imgCaptura")).then(function (canvas) {
    const imgData = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = imgData;
    a.download = "houseimg.png";
    a.click();
  });
});

//--------------------- MOBILE

const abrirMenu = document.getElementById("openMenu");
const fecharMenu = document.getElementById("overlay");

function openMenu() {
  document.documentElement.classList.add("menuOpened");
}

function closeMenu() {
  document.documentElement.classList.remove("menuOpened");
}

abrirMenu.addEventListener("click", openMenu);
fecharMenu.addEventListener("click", closeMenu);
