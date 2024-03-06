import URL_SERVER from "../../constantes";
const iniciarSesion = async (email, password, setUsuario, setErrorInicioSesion) => {
  fetch(URL_SERVER + "api/usuarios/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Verifique su usuario y contraseña.");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("token", JSON.stringify(data.token));
      setUsuario(data.usuario);
    })
    .catch((err) => {
      setErrorInicioSesion(err.message);
      console.error("ERROR: ", err.message);
    });
};




const registrarUsuario = async (nombre,apellidos,email,password) => {
  fetch(URL_SERVER+"api/usuarios/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, apellidos, email, password }),
  })    
  .catch(err => {
    console.error("ERROR: ", err.message)
})  
};


export { iniciarSesion };
export { registrarUsuario };
