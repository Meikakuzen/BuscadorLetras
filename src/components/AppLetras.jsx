import Formulario from "../Formulario"
import useLetras from "../hooks/useLetras"
import Error from "./Error"
import Letra from "./Letra"

const AppLetras = () => {
  
    const {error, letra} = useLetras()
  
    return (
    <>
    <header className="bg-indigo-700 p-10 text-center text-white font-bold uppercase shadow text-4xl">Buscador de letras</header>
    <main className="bg-gray-50 p-10 shadow m-10">
      <Formulario />
      {error? <Error>{error}</Error>: letra ? <Letra />: <p className="text-center">Busca letras de tus artistas favoritos</p> }
    </main>
    
    </>
  
  )
}

export default AppLetras