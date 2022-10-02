import React from "react";

export default function Form({book, setBook}){

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    })
  };

  let {titulo, autor, edicion} = book;

  const handleSubmit = (e) => {
    edicion = parseInt(edicion,10)
    // validacion de datos
    if(titulo === "" || autor === "" || edicion <= 0){
      alert("Todos los campos son obligatorios");
      return
    };
    // consulta
    const requestInit = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(book)
    }
    fetch(`http://localhost:9000/api`, requestInit)
      .then(response => response.text())
      .then(res => console.log(res));
    // reiniciando state
    setBook({
      titulo: "",
      autor: "",
      edicion: 0
    });
  };

  return(
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input value={titulo} name ="titulo" onChange={handleChange} type="text" id="title" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author</label>
        <input value={autor} name ="autor" onChange={handleChange} type="text" id="author" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="edition" className="form-label">Edition</label>
        <input value={edicion} name ="edicion" onChange={handleChange} type="number" id="edition" className="form-control"/>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}