import React from 'react';
import Form from './Form';

const App = () => {

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(response => {setResponse(response)})  
  }

  return (
    <div>
      <Form setForm = {setForm} handleSubmit={handleSubmit} form={form} response={response}/>
    </div>
  );
};

export default App;


// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Mostre uma mensagem na tela, caso a resposta da API seja positiva
