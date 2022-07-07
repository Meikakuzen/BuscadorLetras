import useLetras from "../hooks/useLetras"
import '.././index.css'


const Letra = () => {
  
    const {letra} = useLetras()
  
    return (
    <div className="letra text-center mt-5">
        {letra}
    </div>
  )
}

export default Letra