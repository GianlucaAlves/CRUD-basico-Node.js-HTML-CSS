async function calcularMedia() {
  const numeros = document.getElementById('mediaInput').value;
  const resposta = await fetch(`/operacoes/media?numeros=${numeros}`);
  const dados = await resposta.json();
  document.getElementById('mediaResultado').innerText = `A média é ${dados.media}`;
}

async function calcularFatorial() {
  const numero = document.getElementById('fatorialInput').value;
  const resposta = await fetch(`/operacoes/fatorial?numero=${numero}`);
  const dados = await resposta.json();
  document.getElementById('fatorialResultado').innerText = `O fatorial de ${numero} é ${dados.fatorial}`;
}

async function calcularSomatorio() {
  const inicio = document.getElementById('somatorioInicio').value;
  const fim = document.getElementById('somatorioFim').value;
  const resposta = await fetch(`/operacoes/somatorio?inicio=${inicio}&fim=${fim}`);
  const dados = await resposta.json();
  document.getElementById('somatorioResultado').innerText = `O somatorio de ${inicio} e ${fim} é ${dados.somatorio}`;
}

async function calcularPrimo() {
  const numero = document.getElementById('primoInput').value;
  const resposta= await fetch(`/operacoes/primo?numero=${numero}`);
  const dados = await resposta.json();
  document.getElementById('primoResultado').innerText = `Resultado: ${dados.primo}`;
}

async function calcularMDC() {
  const a = document.getElementById('mdcA').value;
  const b = document.getElementById('mdcB').value;
  const resposta = await fetch(`/operacoes/mdc?a=${a}&&b=${b}`);
  const dados = await resposta.json();
  document.getElementById('mdcResultado').innerText = `O mdc é ${dados.mdc}`;
}