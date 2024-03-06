import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLibrosPrestados, putPrestados } from "../services/libros.service";

export default function MisPrestamos(){
    const [cargaPrestados, setCargaPrestados] = useState(false);
    const [librosPrestados, setLibrosPrestados] = useState([]);

    useEffect(() => {
        getLibrosPrestados(setLibrosPrestados);
        setCargaPrestados(false)
    }, [cargaPrestados]);

    function devolverLibro(libro){
        putPrestados(libro, setCargaPrestados)
    }
    return(
        <>
            <br />
            <h2>Mis Prestamos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Fecha prestamo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {librosPrestados.map((libro)=>(
                        <tr key={libro.id}>
                            <td>{libro.titulo}</td>
                            <td>{libro.autor}</td>
                            <td>{libro.fechaPrestamo}</td>
                            <td><button onClick={()=>devolverLibro(libro)}>Devolver</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}