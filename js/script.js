// Declaração de variáveis
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");
const outputArea = document.getElementById("outputArea");

outputText.style.display = "none";

// Função para criptografar
function encrypt(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

// Função para descriptografar
function decrypt(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

// Função para validar o texto
function validateInput(text) {
  return /^[a-z\s]*$/.test(text);
}

// Event listeners
encryptBtn.addEventListener("click", () => {
  const text = inputText.value;
  if (validateInput(text)) {
    outputText.textContent = encrypt(text);
    outputText.style.display = "block";
  } else {
    alert("Apenas letras minúsculas e espaços são permitidos.");
  }
});

decryptBtn.addEventListener("click", () => {
  const text = inputText.value;
  if (validateInput(text)) {
    outputText.textContent = decrypt(text);
    outputText.style.display = "block";
  } else {
    alert("Apenas letras minúsculas e espaços são permitidos.");
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(outputText.textContent)
    .then(() => alert("Texto copiado para a área de transferência!"))
    .catch((err) => console.error("Erro ao copiar texto: ", err));
});
