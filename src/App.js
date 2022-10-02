import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import Nav from './components/Nav';
import Form from './components/Form';

function App() {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = () => {
      fetch(`http://localhost:9000/api`)
        .then(response => response.json())
        .then(books => setBooks(books));
    }
    getBooks();
  },[]);

  return (
    <div className="App">
      <Nav brand="Library App"/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAlign: "center"}}>Book List</h2>
            <BookList books={books} />
          </div>
          <div className='col-5'>
          <h2 style={{textAlign: "center"}}>Book Form</h2>
          <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
