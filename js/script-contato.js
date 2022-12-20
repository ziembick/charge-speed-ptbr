const createProductButton = document.querySelector("#create-product");
const dialog = document.querySelector(".create-product_dialog");

const openModal = () => dialog.showModal();

createProductButton.addEventListener("click", openModal);

const inputs = document.querySelectorAll("input");

const saveButton = document.querySelector("#save");

function logar() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;
  const form = document.querySelector("form");
  form.reset();

  if (login == "admin" && senha == "admin") {
    alert("Login efetuado com sucesso!");
    createProductButton.textContent = "Sair";
  } else {
    alert("Usuário ou senha inválidas");
  }
}
