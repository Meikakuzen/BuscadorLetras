import {createContext, useState} from 'react'
import axios from 'axios'

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {
  
  const [error, setError] = useState("")
  const [letra, setLetra] = useState("")
  
  const  busquedaLetra = async (busqueda) =>{ //pasar el resultado de la busqueda al provider y haciendo la petición
        try {
            const {artista, cancion} = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
         const {data} = await axios(url)
            setLetra(data.lyrics)
        
        } catch (error) {
            console.log(error)
        }
  }
  
    return (
    <LetrasContext.Provider value={{
            error, setError, busquedaLetra, letra
    }}>
        {children}
    </LetrasContext.Provider>
  )
}

export{
    LetrasProvider
}

export default LetrasContext
