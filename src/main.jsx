import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './components/App.jsx'
import Catalogo from './components/Catalogo.jsx';
import RegistrarUsuario from './components/RegistrarUsuario.jsx';
import MisPrestamos from './components/MisPrestamos.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/", element: <Catalogo/>
      },      
      {
        path: "registro", element: <RegistrarUsuario/>
      },
      {
        path: "misPrestamos", element: <MisPrestamos/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)