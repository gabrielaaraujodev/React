import React from "react";
import Button from "./Button";
import Produto from './Produto'

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


const App = () => {
  
  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  return (
    <div>
      <Button produto = "tablet" loading = {loading} setLoading = {setLoading} setDados = {setDados}/>
      <Button produto = "smartphone" loading = {loading} setLoading = {setLoading} setDados = {setDados}/>
      <Button produto = "notebook" loading = {loading} setLoading = {setLoading} setDados = {setDados}/>


      {loading && <p>Carregando...</p>}

      {dados && !loading && <Produto data = {dados}/>}


    </div>
  )

}

export default App
