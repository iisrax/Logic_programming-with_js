// Arrays são usados para armazenar listas de valores e iterar sobre eles.

let frutas = ["maçã", "banana", "laranja"];

// Acessar elementos, '0' corresponde a maçã, 1 corresponde a banana e assim por diante...
console.log(`Primeira fruta: ${frutas[0]}`);

// O método push() adiciona um novo elemento ao final do array. Aqui, "uva" é adicionado ao array frutas.
frutas.push("uva");
// O console.log() mostra os elementos do array após a adição, usando join(", ") para unir os elementos com uma vírgula e um espaço.
console.log(`Frutas após adição: ${frutas.join(", ")}`);

// O método forEach() é usado para iterar sobre todos os elementos do array. Ele aceita uma função como argumento, que será chamada para cada elemento do array.
frutas.forEach((fruta) => {
  console.log(`Fruta: ${fruta}`);
});
