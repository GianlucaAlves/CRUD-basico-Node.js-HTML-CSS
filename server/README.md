# Projeto: Cálculo de Operações Numéricas com Node.js

Este projeto consiste em uma aplicação cliente-servidor desenvolvida em **Node.js** com **Express**, que oferece rotas para o cálculo de somatório, fatorial, média e verificação de números primos. A aplicação também conta com um front-end simples para consumo da API.

---

## 🎯 Objetivos da Atividade

- Desenvolver um servidor utilizando Node.js com o framework Express;
- Criar rotas HTTP;
- Aplicar estruturas de decisão, repetição, conversão de tipos de dados e manipulação de arrays.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- HTML, CSS e JavaScript (para o front-end)
- Fetch API

---

## 📁 Organização do Projeto

```plaintext
.
├── public/
│   └── index.html          # Página HTML com o formulário para requisições
├── src/
│   ├──routes/
│   │   └── operacoes.js    # Código com as rotas
│   └── index.js            # Código principal do servidor
├── package.json            # Configuração do projeto Node.js
└── README.md               # Documentação do projeto
```

## 🚀 Executando o Projeto

1. Clone o repositório:
```
git clone https://github.com/arleysouza/algo-atv3 server
cd server
```
2. Instale as dependências:
```
npm install
```
3. Execute o servidor:
```
npm start 
# ou
npm run dev
```

## 🔗 Rotas Disponíveis
1. Somatório
```
GET /operacoes/somatorio?inicio=1&fim=10
```
2. Fatorial
```
GET /operacoes/fatorial?numero=5
```
3. Média
```
GET /operacoes/media?numeros=1,2,3
```
4. Verificação de Primo
```
GET /operacoes/primo?numero=7
```
5. Verificação de MDC
```
GET /operacoes/mdc?a=10&b=15
```