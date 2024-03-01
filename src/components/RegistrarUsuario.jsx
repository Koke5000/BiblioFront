import { useState } from "react"
import { useOutletContext, useNavigate } from "react-router-dom";
import { registrarUsuario } from "../services/usuarios.service";

export default function RegistrarUsuario(){
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');

    const {email: [email, setEmail]} = useOutletContext();

    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');

    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [repetirPasswordError, setRepetirPasswordError] = useState("")



    function validarPassword() {
        const contraseña = document.getElementById("password");
        const error = document.getElementById("errorPassword");
        let patron = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        if (!patron.test(contraseña.value)) { 
            contraseña.classList.add("invalido");
            error.innerText = "Contraseña con formato incorrecto";
            return false;
        } else {
            contraseña.classList.remove("invalido");
            error.innerText = "";
            return true;
        }
    }
    
    function validarRepetirPassword() {
        let patron = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        if (!patron.test(repetirPassword || password !== repetirPassword)) { 
            setRepetirPasswordError("Contraseña mal puesta");
            return false;
        } else {
            setRepetirPasswordError("");
            return true;
        }
    }
    
    
    function validarEmail() {
        let patron = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;    
        if (!patron.test(email)) {
            setEmailError("Email con formato incorrecto");
            return false;
        }else{
            setEmailError("");
            return true;
        }
    }

    function validarRegistro(){
        if (validarEmail() && validarPassword() && validarRepetirPassword()){
            registrarUsuario(nombre,apellidos,email,password);
            navigate("/");
        }
    }

    return(
        <>
        
            <h2>Datos nuevo usuario</h2>
            <label>Nombre:<input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /></label>
            <label>Apellidos:<input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} /></label>
            <label>Email:<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            <span>{emailError}</span>
            <label>Password:<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
            <span>{passwordError}</span>
            <label>Repetir Password:<input type="password" value={repetirPassword} onChange={(e) => setRepetirPassword(e.target.value)} /></label>
            <span>{repetirPasswordError}</span>
            <br /><br />
            <button onClick={()=>{validarRegistro()}}>Registrar Usuario</button>        
        </>
    )

}