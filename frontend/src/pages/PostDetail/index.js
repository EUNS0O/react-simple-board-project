import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPost, createComment } from '../../api/postApi';
import CommentForm from '../../components/CommentForm';

export default function PostDetail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [ post,setPost ] = useState(null);

    useEffect(() => {
        fetchPost(id)
            .then(res => setPost(res.data))
            .catch(() => navigate(-1));
    }, [id, navigate]);

    if(!post) return <p>로딩 중...</p>

    const handleComment = async (postId, { text }) => {
        try {
            await createComment(postId, {text});
            const res = await fetchPost(postId);
            setPost(res.data);
        }catch(err){
            console.error(err);
        }
    };

return (
    <div className="container">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <hr />
        <h2>댓글 ({post.comments.length})</h2>
        {post.comments.map(c => (
            <div key={c._id}>• {c.text}</div>
        ))}
        <CommentForm postId={post._id} onAdd={handleComment}/>
        <button onClick={() => navigate(-1)}>목록으로 돌아가기</button>
    </div>
    );
} 