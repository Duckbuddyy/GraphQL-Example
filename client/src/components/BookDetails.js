import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries.js';

const BookDetails = (props) => {
    const { loading, error, data } = useQuery(getBookQuery, {
        variables: {
            id: props.bookId
        }
    });

    if (loading)
        return <div id='book-details'>Book details loading.</div>;
    else if (error)
        return <div id='book-details'>Error happened while loading book detail.</div>;
    else
        if (data.book)
            return (
                <div id='book-details'>
                    <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {data.book.author.books.map((item) => <li key={item.id}>{item.name}</li>)}
                    </ul>
                </div>
            );
        else {
            return (
                <div id='book-details'>
                    <p>No book selected.</p>
                </div>
            );
        }
}

export default BookDetails;