import { useEffect, useState } from "react";
import BarraBusqueda from './BarraBusqueda'
import { useOutletContext } from "react-router-dom";
import { getCatalogo, postPrestados } from "../services/libros.service";
import { getPaginasTotal, getPaginasBusqueda } from "../services/paginas.service";


export default function Catalogo(){
    const {usuario: [usuario, setUsuario]} = useOutletContext()
    const [cargaLibros, setCargaLibros] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [libros, setLibros] = useState([]);

    const [total, setTotal] = useState(0);
    const [pagina, setPagina] = useState(0);

    useEffect(() => {
        getCatalogo(pagina, setLibros, filterText);
        if (filterText!=="") {
            getPaginasBusqueda(setTotal, filterText);
        }else{
            getPaginasTotal(setTotal);
        }
        setCargaLibros(false)
    }, [filterText, cargaLibros, pagina]);

    useEffect(() => {
        setPagina(0);
        setCargaLibros(true)
    }, [filterText]);

    function prestarLibro(libro){
        postPrestados(libro, setCargaLibros)
    }

    return(
        <>
            <br />
            <h2>Catalogo</h2>


            <BarraBusqueda filterText={filterText} setFilterText={setFilterText} setPagina={setPagina}/>

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
                        <th>Pagina {pagina+1} de {total+1}</th>
                        {pagina+1!==1?<th><button onClick={()=>setPagina(pagina - 1)}>Anterior</button></th>:<th></th>}
                        {pagina+1==total+1?<th></th>:<th><button onClick={()=>setPagina(pagina + 1)}>Siguiente</button></th>}
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
