import React, { useState } from 'react';
import styles from './CommentForm.module.css';

export default function CommentForm({ postId, onAdd }){
    console.log('CommentForm onAdd:',onAdd);
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!text.trim()) return;
        onAdd(postId, { text });
        setText('');
    };

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
                className={styles.textarea}
                placeholder="댓글을 작성하세요"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button type="submit" className={styles.button}>
                댓글 등록
            </button>
        </form>
    );
}