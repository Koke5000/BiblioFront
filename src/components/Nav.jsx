import { Link } from "react-router-dom";


export default function Nav({usuario}) {
    return (
        <>            
            <ul>
                {usuario?<></>:<li><Link to = "/registro">Registro</Link></li>}
                <li><Link to = "/">Catalogo</Link></li>
                {usuario?<li><Link to = "/misPrestamos">Mis Prestamos</Link></li>:<></>}
            </ul>
        </>
    )
}