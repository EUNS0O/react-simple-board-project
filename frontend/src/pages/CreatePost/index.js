import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../api/postApi';

export default function CreatePost(){
    const [form, setForm] = useState({ title: '', content: '' });
    const navigate = useNavigate();

    const handleChange = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            await createPost(form);
            navigate('/');
        }catch(err){
            console.error(err);
        }
    };

    return(
        <div className="container">
            <h1>✍️게시물 작성</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    placeholder="제목"
                    value={form.title}
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    placeholder="내용"
                    value={form.content}
                    onChange={handleChange}
                />
                <button type="submit">등록</button>
            </form>
        </div>
    );
}