import { useEffect, useState } from "react";
import BarraBusqueda from './BarraBusqueda'
import { useOutletContext } from "react-router-dom";
import { getCatalogo } from "../services/libros.service";

export default function Catalogo(){
    const {usuario: [usuario, setUsuario]} = useOutletContext()
    const {cargaLibros: [cargaLibros, setCargaLibros]} = useOutletContext()
    const {cargaPrestados: [cargaPrestados, setCargaPrestados]} = useOutletContext()
    const [filterText, setFilterText] = useState('');
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        getCatalogo(setLibros, filterText);
        setCargaLibros(false)
    }, [filterText, cargaLibros]);

    function prestarLibro(){

    }

    return(
        <>
            <br />
            <br />
            <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Disponibles</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro)=>(
                        <tr key={libro.id}>
                            <td>{libro.titulo}</td>
                            <td>{libro.autor}</td>
                            <td>{libro.disponibles}</td>
                            {usuario ? <td><button onClick={()=>prestarLibro(libro)}>Prestar</button></td> : <></>}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Pagina 1 de total</th>
                        <th><button>Anterior</button></th>
                        <th><button>Siguiente</button></th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
