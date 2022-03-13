import React from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries.js';

const BookList = (props) => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading)
    return <div>Loading books.</div>;
  else if (error)
    return <div>Error happened while loading books.(</div>;
  else
    return (
      <ul id="books-list">
        {data.books.map(book => <li key={book.id}>{book.name}</li>)}
      </ul>
    );
}

export default BookList;