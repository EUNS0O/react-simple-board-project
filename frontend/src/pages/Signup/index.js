import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Signup(){
    const [form, setForm] = useState({ username: '', password: ''});
    const { signup } = useAuth();
    const nav = useNavigate();

    const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    const onSubmit = async e => {
        e.preventDefault();
        await signup(form);
        nav('/');
    };

    return(
        <div className="container">
            <h1>회원가입</h1>
            <form onSubmit={onSubmit}>
                <input name="username" placeholder="아이디" value={form.username} onChange={onChange}/>
                <input type="password" name="password" placeholder="비밀번호" value={form.password} onChange={onChange}/>
                <button type="submit">가입하기</button>
            </form>
            <p>이미 계정이 있나요?<Link to="/login">로그인</Link></p>
        </div>
    );
}