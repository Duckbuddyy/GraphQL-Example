import React from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries.js';

const AddBook = (props) => {
    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>
                    {authorField()}
                </select>
            </div>

            <button>+</button>
        </form>
    );
}

const authorField = (props) => {
    const { loading, error, data } = useQuery(getAuthorsQuery);

    if (loading)
        return (<option>Loading authors</option>);
    else if (error)
        return (<option>Error while loading authors</option>);
    else
        return data.authors.map(author =>
            <option key={author.id} value={author.id}>{author.name}</option>
        );
}

export default AddBook;