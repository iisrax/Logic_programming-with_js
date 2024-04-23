// Objetos são usados para armazenar dados estruturados e representar entidades.

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
  };
  
  // Acessar propriedades
  console.log(`Marca do carro: ${carro.marca}`);
  
  // Modificar propriedades, O console.log() com JSON.stringify(carro) imprime todo o objeto em formato JSON, exibindo as propriedades do objeto e seus valores
  carro.cor = "preto";
  console.log(`Carro com cor modificada: ${JSON.stringify(carro)}`);
  
  // Adicionar métodos
  carro.descrever = function() {
    console.log(`Carro: ${this.marca} ${this.modelo}, ano ${this.ano}`);
  };
  
  carro.descrever();  