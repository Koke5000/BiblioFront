import { useState } from 'react'
import Nav from './Nav';
import { Outlet } from 'react-router';
import InicioSesion from './InicioSesion';
import MensajeLogin from './MensajeLogin';
function App() {
  const [usuario, setUsuario]= useState(null);
  const [email, setEmail] = useState('');
  const [cargaLibros, setCargaLibros] = useState(false);
  const [cargaPrestados, setCargaPrestados] = useState(false);
  
  return (
    <>
      <h1>Biblioteca Torres</h1>
      <div>     
        {usuario?<MensajeLogin usuario={usuario} setUsuario={setUsuario}/>:<InicioSesion setUsuario={setUsuario} email={email} setEmail={setEmail}/>}
        <Nav usuario={usuario}/>
      </div>

      <Outlet context={{
        usuario: [usuario, setUsuario],
        email: [email, setEmail],
        cargaLibros: [cargaLibros, setCargaLibros],
        cargaPrestados: [cargaPrestados, setCargaPrestados]
      }} />
    </>
  );
}

export default App
