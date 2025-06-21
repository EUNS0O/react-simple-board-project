import React, { useEffect, useState } from 'react';
import{ Link } from 'react-router-dom';
import PostList from '../../components/PostList';
import { fetchPosts } from '../../api/postApi';

export default function Home(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
    }, []);

    return(
        <div className="container">
            <h1>게시물 목록</h1>
            <Link to="/posts/new">➕ 새 글 작성 </Link>
            <PostList posts={posts}/>
        </div>
    );
}