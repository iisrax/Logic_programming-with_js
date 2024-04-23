// Booleanos são usados para controle de fluxo e validação de condições.

//Altere para 'false' para aparecer a msg do else
let estaChovendo = true;

if (estaChovendo) {
  console.log("Não esqueça o guarda-chuva!");
} else {
  console.log("Aproveite o sol!");
}

// Validação de condição
let senha = "12345";
let senhaCorreta = senha === "12345";
console.log(`Senha correta: ${"senhaCorreta"}`);