import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Login(){
    const [form, setForm] = useState({ username: '', password: '' });
    const { login } = useAuth();
    const nav = useNavigate();

    const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value}))
    const onSubmit = async e => {
        e.preventDefault();
        await login(form);
        nav('/');
    };

    return(
        <div className="container">
            <h1>로그인</h1>
            <form onSubmit={onSubmit}>
                <input name="username" placeholder="아이디" value={form.username} onChange={onChange}/>
                <input type="password" name="password" placeholder="비밀번호" value={form.password} onChange={onChange}/>
                <button type="submit">로그인</button>                
            </form>
            <p>아직 계정이 없나요? <Link to="/signup">회원가입</Link></p>
        </div>
    );
}