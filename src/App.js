import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import Nav from './components/Nav';
import Form from './components/Form';

function App() {

const [book, setBook] = useState({
  titulo: "",
  autor: "",
  edicion: 0
});

const [listUpdated, setListUpdated] = useState(false);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = () => {
      fetch(`http://localhost:9000/api`)
        .then(response => response.json())
        .then(books => setBooks(books));
    }
    getBooks();
    setListUpdated(false);
  },[listUpdated]);

  return (
    <div className="App">
      <Nav brand="Library App"/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign: "center"}}>Book List</h2>
            <BookList setBook={setBook} book={book} books={books} setListUpdated={setListUpdated}/>
          </div>
          <div className='col-5'>
          <h2 style={{textAlign: "center"}}>Book Form</h2>
          <Form book={book} setBook={setBook}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
