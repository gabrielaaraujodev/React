import React from 'react'


const Button = ( {produto, setDados, setLoading, loading} ) => {  

    const handleClick = () => {
        setLoading(true)

        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => {
            setDados(json);
            setLoading(false)
        })
    }
  
    return (
        <div>
            <button onClick={handleClick}>
                {produto}
            </button>      
        </div>
  )
}

export default Button
