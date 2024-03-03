const getCatalogo = async (setLibros, filterText) => {
    fetch(`http://localhost:8080/api/libros/${filterText}/0`)
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

export { getCatalogo };
