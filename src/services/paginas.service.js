import URL_SERVER from "../../constantes";
const getPaginasTotal = async (setTotal) => {
    fetch(URL_SERVER+`api/libros/paginas`)
    .then(response => {
        if (response.ok)
            return response.json();
        
        throw new Error(response.status);
    })
    .then(data => {
        setTotal(data.numPaginas)
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
    })   
  };

  const getPaginasBusqueda = async (setTotal, filterText) => {
    fetch(URL_SERVER+`api/libros/${filterText}/paginas`)
    .then(response => {
        if (response.ok)
            return response.json();
        
        throw new Error(response.status);
    })
    .then(data => {
        setTotal(data.numPaginas)
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
    })   
  };
export { getPaginasTotal };
export { getPaginasBusqueda };