import React from "react";


const Question = ({indice, setIndice, resposta, setResposta, perguntas}) => {

    const [radio, setRadio] = React.useState();
   

    function handleSubmit(event) {
        event.preventDefault();

        if (indice < perguntas.length && radio != null) {
            setIndice(indice => indice + 1);
            setResposta(...resposta, radio);
        }
            
    }

    return ( 
        <form onSubmit={handleSubmit}>


        {perguntas[indice] && (
            <fieldset key={perguntas[indice].id}>
                <legend>{perguntas[indice].pergunta}</legend>
                {perguntas[indice].options.map((option, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            value={option} 
                            checked={radio === option}
                            onChange={({ target }) => setRadio(target.value)}
                        />
                        {option}
                    </label>
                ))}
            </fieldset>
        )}

        <button>Próxima</button>

        </form>
    );
}

export default Question;