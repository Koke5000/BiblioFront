import { useState } from "react";
import { iniciarSesion } from "../services/usuarios.service";

export default function InicioSesion({setUsuario, email, setEmail}){
        
    const [password, setPassword] = useState('');

    return(
        <>
            <h2>Inicio Sesion</h2>       
            <label>Email:<input type="text" value={email}
            onChange={(e) => setEmail(e.target.value)} /></label>

            <label>Password:<input type="password" value={password} 
            onChange={(e) => setPassword(e.target.value)} /></label>
            <br /><br />
            <button onClick={()=>{iniciarSesion(email, password, setUsuario)}}>Iniciar Sesion</button>
        </>
    )
}