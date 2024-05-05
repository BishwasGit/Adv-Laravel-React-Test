// resources/js/components/ListPosts.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

const ListPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <div className='container'>
            <h1>List of Posts</h1>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Contents</th>
                </tr>
                {posts.map(post => (
                    <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default ListPosts;


if (document.getElementById('listPost')) {
    const Index = ReactDOM.createRoot(document.getElementById("listPost"));
    Index.render(
        <React.StrictMode>
            <ListPosts/>
        </React.StrictMode>
    )
}
