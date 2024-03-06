import { useState } from 'react'
import Nav from './Nav';
import { Outlet } from 'react-router';
import InicioSesion from './InicioSesion';
import MensajeLogin from './MensajeLogin';
function App() {
  const [usuario, setUsuario]= useState(null);
  
  return (
    <>
      <h1>Biblioteca Torres</h1>
      <div>     
        {usuario?<MensajeLogin usuario={usuario} setUsuario={setUsuario}/>:<InicioSesion usuario={usuario} setUsuario={setUsuario}/>}
        <Nav usuario={usuario}/>
      </div>

      <Outlet context={{
        usuario: [usuario, setUsuario]
      }} />
    </>
  );
}

export default App
