import URL_SERVER from "../../constantes";
const getCatalogo = async (pagina, setLibros, filterText) => {
    fetch(URL_SERVER+`api/libros/${filterText}/${pagina}`)
    .then(response => {
        if (response.ok)
            return response.json();
        
        throw new Error(response.status);
    })
    .then(data => {
        setLibros(data);
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
    })   
  };

  const postPrestados = async (libro, setCargaLibros) => {
    fetch(URL_SERVER+`api/libros/${libro.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem(("token")))}`
      },
    })    
    .then(response => {
        if (response.ok){        
            setCargaLibros(true);
            return response.json();}

        throw new Error(response.status);
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
    })   
  };

  const getLibrosPrestados = async  (setLibrosPrestados) => {
    fetch(URL_SERVER+"api/libros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
        const librosPrestados = data.map(item => ({
            id: item.ejemplar.id,
            titulo: item.ejemplar.libro.titulo,
            autor: item.ejemplar.libro.autor,
            fechaPrestamo: item.fechaprestamo,
            fechaDevolucion: item.fechadevolucion,
          }));
          setLibrosPrestados(librosPrestados);
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
    })   
  };

  const putPrestados = async (libro, setCargaLibros) => {
    fetch(URL_SERVER+`api/libros/${libro.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem(("token")))}`
        },
    })    
    .then(response => {
        if (response.ok){        
            setCargaLibros(true);
            return response.json();
        }

        throw new Error(response.status);
    })
    .catch(err => {
        console.error("ERROR: ", err.message);
    })   
};

export { getCatalogo };
export { postPrestados };
export { getLibrosPrestados };
export { putPrestados };
