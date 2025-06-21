import React, { useState } from 'react';
import styles from './PostForm.module.css';

export default function PostForm({ onAdd }){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!title.trim() || !content.trim()) return;

        onAdd({ id: Date.now(), title, content });
        setTitle('');
        setContent('');
    };

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
            className={styles.input}
            type="text"
            placeholder="제목"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <textarea
            className={styles.textarea}
            placeholder="내용"
            value={content}
            onChange={e => setContent(e.target.value)}
            />
            <button className={styles.button} type="submit">등록</button>
        </form>
    );
}
 