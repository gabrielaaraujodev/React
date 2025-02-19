import React from 'react';
import {GlobalContext} from './FetchData'

const App = () => {

  const global = React.useContext(GlobalContext);

  return (
    <div>
      { 
        global.dados != null && (
          <>
            <p>Nome: {global.dados.nome}</p> 
            <p>Preço: {global.dados.preco}</p> 
            <button onClick={global.limparDados}>Limpar Dados</button>  
          </>
        ) 
      }
    </div>
  );
};

export default App;

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global