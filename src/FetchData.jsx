import React from 'react'

export const GlobalContext = React.createContext();


export const FetchData = ({ children }) => {

    const [dados, setDados] = React.useState(null)

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
        .then(response => response.json())
        .then(json => setDados(json))
    }, [])    
    
    function limparDados () {
        setDados(null)
    }

    return (
        <GlobalContext.Provider value={{dados, limparDados}}>
            {children}
        </GlobalContext.Provider>
    )
}





