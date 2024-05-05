// resources/js/components/CreatePost.js

import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/posts', { title, content })
            .then(response => {
                console.log('Post created successfully:', response.data);
                alert( response.data)
            })
            .catch(error => {
                console.error('Error creating post:', error);
                alert(error)
            });
    };

    return (
        <div className='container'>
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <button type="submit" className='btn'>Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;


if (document.getElementById('CreatePost')) {
    const Index = ReactDOM.createRoot(document.getElementById("CreatePost"));
    Index.render(
        <React.StrictMode>
            <CreatePost/>
        </React.StrictMode>
    )
}
