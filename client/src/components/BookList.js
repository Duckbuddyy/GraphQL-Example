import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const getBooksQuery = gql`
{
  books {
    name
    id
  }
}  
`;

const BookList = (props) => {
  const { loading, error, data } = useQuery(getBooksQuery);

  console.log(data);
  console.log(error);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  );
}

export default BookList;