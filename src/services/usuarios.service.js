const iniciarSesion = async (email, password, setUsuario) => {
  fetch("http://localhost:8080/api/usuarios/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((data) => data.json())
    .then((json) => {
      localStorage.setItem("token", JSON.stringify(json.token));
      setUsuario(json.usuario);
    });
};


const registrarUsuario = async (nombre,apellidos,email,password) => {
  const data = await fetch("http://localhost:8080/api/usuarios/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, apellidos, email, password }),
  });
};


export { iniciarSesion };
export { registrarUsuario };
