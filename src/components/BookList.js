import React from "react";

export default function BookList({book, setBook, books, setListUpdated}){

  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    }
    fetch(`http://localhost:9000/api/${id}`, requestInit)
      .then(response => response.text())
      .then(res => console.log(res));

    setListUpdated(true);
  };

  let {titulo, autor, edicion} = book;

  const handleUpdate = (id) => {
    edicion = parseInt(edicion,10)
    // validacion de datos
    if(titulo === "" || autor === "" || edicion <= 0){
      alert("Todos los campos son obligatorios");
      return
    };
    const requestInit = {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(book)
    }
    fetch(`http://localhost:9000/api/${id}`, requestInit)
      .then(response => response.text())
      .then(res => console.log(res));
    // reiniciando state
    setBook({
      titulo: "",
      autor: "",
      edicion: 0
    });

    setListUpdated(true);
  };

  return(
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      </thead>
      <tbody>
        {
          books && books.map(b => (
          <tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.titulo}</td>
            <td>{b.autor}</td>
            <td>{b.edicion}</td>
            <td>
              <div className="mb-3">
                <button onClick={() => handleDelete(b.id)} className="btn btn-danger">Delete</button>
              </div>
              <div className="mb-3">
                <button onClick={() => handleUpdate(b.id)} className="btn btn-dark">Update</button>
              </div>
            </td>
            
          </tr>
          ))
        }
      </tbody>
    </table>
  );
}