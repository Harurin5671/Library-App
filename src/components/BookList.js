import React from "react";

export default function BookList(props){
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
          props.books && props.books.map(b => (
          <tr key={b.id}>
            <th>{b.id}</th>
            <th>{b.titulo}</th>
            <th>{b.autor}</th>
            <th>{b.edicion}</th>
          </tr>
          ))
        }
      </tbody>
    </table>
  );
}