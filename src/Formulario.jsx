import {useState} from 'react'
import useLetras from './hooks/useLetras'

const Formulario = () => {
  
    const {setError, busquedaLetra} = useLetras()

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  })

  const handleChange = (e)=>{
    setBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e=>{
        e.preventDefault()
        if(Object.values(busqueda).includes("")){
            setError("Todos los campos son obligatorios")
            return
        }
        busquedaLetra(busqueda) //pasando el resultado al provider
        setError("")
    }
    return (
    <>
        <form onSubmit={handleSubmit} className="flex text-center px-3 justify-center items-center">
        
            <label className="text-gray-700 block text-xl mr-10 ">Artista</label>
            <input type="text" 
            className="shadow rounded p-1" 
            value={busqueda.artista} 
            name="artista" 
            onChange={handleChange}
            placeholder="Nombre artista" />
            
            <label className="text-gray-700 block text-xl mr-10 ml-10">Canción</label>
            <input type="text" 
            className="shadow rounded mr-10 p-1" 
            value={busqueda.cancion} 
            name='cancion' 
            placeholder="Nombre canción"
            onChange={handleChange} />
            
            <input type="submit" value="BUSCAR CANCIÓN" 
            className="flex bg-indigo-700 block hover:bg-indigo-800 font-bold text-white uppercase text-xl rounded p-2" />


        </form>
    
    </>
  )
}

export default Formulario