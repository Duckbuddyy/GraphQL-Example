import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries.js';

import BookDetails from './BookDetails.js';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  const [selectedState, setSelectedState] = useState({
    selected: null
  });

  if (loading)
    return <div>Loading books.</div>;
  else if (error)
    return <div>Error happened while loading books.(</div>;
  else
    return (
      <div>
        <ul id="book-list">
          {data.books.map(book => <li key={book.id} onClick={(e) => setSelectedState({ selected: book.id })}>{book.name}</li>)}
        </ul>
        <BookDetails bookId={selectedState.selected} />
      </div>
    );
}

export default BookList;