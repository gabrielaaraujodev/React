import React from 'react'

function Acertos({resposta, perguntas}) {
  
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        let acertos = 0;
    
        for (let i = 0; i < perguntas.length; i++) {

          if (resposta[i] === perguntas[i].resposta) {
            acertos++;
          }
          
        }
    
        setTotal(acertos); 
    
      }, [resposta, perguntas])

    return (
    <>
        <p>Você acertou {total} de 4</p>
    </>
  )
}

export default Acertos
