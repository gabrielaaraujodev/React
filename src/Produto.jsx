import React from 'react'

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produto = () => {
  return (
    <div>
      {produtos.map(({ nome, propriedades }) => {
        return (
          <div style={{ border: "1px solid black", width: "100%", margin: "1rem", padding: "1rem" }}>
            <h2>{nome}</h2>
            <ul>
              {propriedades.map((propriedade, index) => {
                return <li key={index}>{propriedade}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Produto
