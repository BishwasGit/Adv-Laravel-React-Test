// resources/js/components/EditPost.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

const EditPost = ({ match }) => {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get(`/api/posts/${match.params.id}`)
            .then(response => {
                setPost(response.data);
                setTitle(response.data.title);
                setContent(response.data.content);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }, [match.params.id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`/api/posts/${post.id}`, { title, content })
            .then(response => {
                console.log('Post updated successfully:', response.data);
                // Redirect or update state as needed
            })
            .catch(error => {
                console.error('Error updating post:', error);
            });
    };

    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
};

export default EditPost;


if (document.getElementById('EditPost')) {
    const Index = ReactDOM.createRoot(document.getElementById("EditPost"));
    Index.render(
        <React.StrictMode>
            <EditPost/>
        </React.StrictMode>
    )
}
