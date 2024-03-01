import { useNavigate } from "react-router-dom";

export default function MensajeLogin({usuario, setUsuario}){
    const navigate = useNavigate();

    return(
        <>
            <span>Bienvenido {usuario.nombre}</span><button onClick={()=>{
                setUsuario(null);
                localStorage.removeItem("token")
                navigate("/");
            }}>Cerrar Sesion</button>
        </>
    )

} 