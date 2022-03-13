import React from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries.js';

const AddBook = (props) => {
    let state = {
        name: "1",
        genre: "1",
        authorId: "1"
    };
    return (
        <form id="add-book" onSubmit={(e) => submitForm(e, state)}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => state.name = e.target.value} />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => state.genre = e.target.value} />
            </div>

            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => state.authorId = e.target.value}>
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

function submitForm(e, state) {
    e.preventDefault();
    console.log(state);
}

export default AddBook;