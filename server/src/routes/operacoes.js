const router = require("express").Router();
/*
Testes:
http://localhost:3003/operacoes/somatorio
http://localhost:3003/operacoes/somatorio?inicio=a
http://localhost:3003/operacoes/somatorio?inicio=a&fim=b
http://localhost:3003/operacoes/somatorio?inicio=10&fim=b
http://localhost:3003/operacoes/somatorio?inicio=10&fim=1
http://localhost:3003/operacoes/somatorio?inicio=1&fim=10
*/
// Rota para calcular o somatório
router.get("/somatorio", async function (req, res) {
  let { inicio, fim } = req.query;
    inicio = Number(inicio);
    fim = Number(fim);

    if (isNaN(inicio) || isNaN(fim)) {
        return res.json({ error: "Parâmetros inválidos." });
    }
    if (inicio > fim) {
        return res.json({ error: "Parâmetro inicio é maior do que fim" });
    }

    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        soma += i;
    }
    res.json({ somatorio: soma });
});

/*
Testes:
http://localhost:3003/operacoes/fatorial
http://localhost:3003/operacoes/fatorial?numero=a
http://localhost:3003/operacoes/fatorial?numero=-5
http://localhost:3003/operacoes/fatorial?numero=5
*/
// Rota para calcular o fatorial
router.get("/fatorial", async function (req, res) {
  let { numero } = req.query;

  if (numero === undefined) {
    return res.json({ erro: "Parâmetro 'numero' é obrigatório" });
  }

  const num = Number(numero);

  if (isNaN(num)) {
    return res.json({ erro: "Parâmetro 'numero' precisa ser um número" });
  }

  if (num < 0) {
    return res.json({ erro: "O valor de 'numero' não pode ser negativo" });
  }

  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }

  res.json({ resultado });
});

/*
http://localhost:3003/operacoes/media
http://localhost:3003/operacoes/media?numeros=a,b,c
http://localhost:3003/operacoes/media?numeros=1;2;3
http://localhost:3003/operacoes/media?numeros=1,x,3
http://localhost:3003/operacoes/media?numeros=4.32
http://localhost:3003/operacoes/media?numeros=1,2.9,3
 */
// Rota para calcular a média
router.get("/media", async function (req, res) {
  const { numeros } = req.query;

  if (!numeros) {
    return res.json({ erro: "Parâmetro 'numeros' é obrigatório" });
  }

  // Testa se contém apenas números, vírgulas e pontos (para decimais)
  if (!/^[0-9.,]+$/.test(numeros)) {
    return res.json({ erro: "Parâmetro 'numeros' deve conter apenas números e vírgulas" });
  }

  // Transforma em array de números
  const values = numeros.split(",").map(v => Number(v));

  // Testa se algum elemento não é número válido
  if (values.some(v => isNaN(v))) {
    return res.json({ erro: "Parâmetro 'numeros' deve conter apenas números e vírgulas" });
  }

  const soma = values.reduce((acc, num) => acc + num, 0);
  const mediaCalculada = soma / values.length;

  res.json({ media: mediaCalculada });
});

/*
http://localhost:3003/operacoes/primo
http://localhost:3003/operacoes/primo?numero=a
http://localhost:3003/operacoes/primo?numero=1
http://localhost:3003/operacoes/primo?numero=2
http://localhost:3003/operacoes/primo?numero=9
 */
router.get("/primo", async function (req, res) {
  let { numero } = req.query;
  if (!numero) return res.json({ error: "Nenhum número informado" });
  numero = Number(numero);

  if(isNaN(numero)){
    return res.json({"erro":"Informe um número inteiro"});
  }

  if ( numero <= 1) {
    return res.json({"erro":"Informe um número inteiro igual ou maior que 2" });
  }
  if (numero === 2) {
    return res.json({ primo: true });
  }
  if (numero % 2 === 0) {
    return res.json({ primo: false });
  }
  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) {
      return res.json({ primo: false });
    }
  }
  return res.json({ primo: true });
});

/*
Testes:
http://localhost:3001/operacoes/mdc
http://localhost:3001/operacoes/mdc?a=x
http://localhost:3001/operacoes/mdc?a=10&b=y
http://localhost:3001/operacoes/mdc?a=10&b=15
*/
// Rota para calcular o somatório
router.get("/mdc", function (req, res) {
  let { a, b } = req.query;
  a = Number(a);
  b = Number(b);

 
  
  if (isNaN(a) || isNaN(b)) {
    return res.json({ error: "Parâmetros inválidos para MDC." });
  }
  if(!a){
    res.json({"erro":"Parâmetro 'a' é obrigatório"});
  }
  if(!b){
    res.json({"erro":"Parâmetro 'b' é obrigatório"});
  }
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    [x, y] = [y, x % y];
  }

  res.json({ mdc: x });
});

// Exporta o router para ser usado no servidor principal
module.exports = router;
