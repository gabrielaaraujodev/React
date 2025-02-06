import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
  
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const somaPreco = (dados) => {
  var valor = 0;
  var valoresInt = dados.compras.map((valores) => Number(valores.preco.replace("R$ ", "")));
  

  valoresInt.forEach(
    (preco) => {
      valor += preco
    }
  )
  return valor
}

const App = () => {
  const dados = luana;

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa  == true ? "Ativo" : "Inativo"}</span></p>
      <p>Total gasto: R$ {somaPreco(dados)}</p>
      {somaPreco(dados) > 10000 && <p>Você está gastando muito</p>}
    </div>
  )
}

export default App
