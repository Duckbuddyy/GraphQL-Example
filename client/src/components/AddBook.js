import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation } from '../queries/queries.js';

const AddBook = () => {
    const [formState, setFormState] = useState({
        name: '',
        genre: '',
        authorId: ''
    });

    const [addBook] = useMutation(addBookMutation, {
        variables: {
            name: formState.name,
            genre: formState.genre,
            authorId: formState.authorId
        }
    });

    return (
        <form id="add-book" onSubmit={(e) => {
            e.preventDefault();
            console.log(addBook());
        }}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setFormState({
                    ...formState,
                    name: e.target.value
                })} />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setFormState({
                    ...formState,
                    genre: e.target.value
                })} />
            </div>

            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setFormState({
                    ...formState,
                    authorId: e.target.value
                })} >
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