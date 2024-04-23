// Funções podem ser usadas como variáveis e passadas como argumentos para outras funções.

// Declaração de função
function saudacao() {
    console.log("Olá, mundo!");
  }
  
  // Chamar a função
  saudacao();
  
  // Passar função como argumento
  function executarFuncao(func) {
    func();
  }
  
  executarFuncao(saudacao);
  