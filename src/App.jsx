import React from 'react';
import Question from './Question';
import Acertos from "./Acertos";

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
];


const App = () => {

  const [indice, setIndice] = React.useState(0);
  const[resposta, setRespostas] = React.useState([]);

  return (
    <div>
      <Question indice = {indice} setIndice = {setIndice} resposta = {resposta} setRespostas ={setRespostas} perguntas = {perguntas}/>

      {indice >= 4 && <Acertos resposta = {resposta} perguntas = {perguntas}/>} 
    </div>
  );
};

export default App;