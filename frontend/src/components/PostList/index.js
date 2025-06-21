import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';

export default function PostList({ posts }){
    if(posts.length === 0){
        return <p>아직 게시글이 없습니다.</p>
    }

    return(
        <ul className={styles.list}>
            {posts.map(post => (
                <li key={post._id} className={styles.item}>
                    <h3 className={styles.title}>
                        <Link to={`/posts/${post._id}`} className={styles.link}>
                        {post.title}
                        </Link>
                    </h3>
                    <p className={styles.content}>{post.content}</p>
                </li>
            ))}
        </ul>
    );
}

