import React from "react";
import Home from "./Home";
import Produtos from "./Produtos";
import List from "./List";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {

  const { pathname } = window.location

  return (
    <div>
      <ul>
        <List nome = "home" />

        <List nome = "produtos" />

        {pathname == "/home" ? <Home cor = "green" /> : <Produtos cor = "green" />}
      </ul>
    </div>
  )

}

export default App
