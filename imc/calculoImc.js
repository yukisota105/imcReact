export function calcularImc(peso, altura) {
  const pesoNum = parseFloat(peso);
  const alturaNum = parseFloat(altura);

  if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum === 0) {
    return { imc: null, mensagem: "Valores inválidos!" };
  }

  const imc = pesoNum / (alturaNum * alturaNum);

  let mensagem = "";
  if (imc < 18.5) {
    mensagem = " Você está abaixo do peso";
  } else if (imc < 25) {
    mensagem = "Seu peso está normal";
  } else if (imc < 30) {
    mensagem = "você está sobrepeso";
  } else {
    mensagem = "você esta em estado de obesidade";
  }

  return { imc: imc.toFixed(2), mensagem };
}
