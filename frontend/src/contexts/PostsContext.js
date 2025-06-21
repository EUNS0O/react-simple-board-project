import React, { createContext, useContext, useState } from 'react';

const PostsContext = createContext();

export function PostsProvider({ children }){
    const [posts, setPosts] = useState([]);

    const addPost = post => {
        setPosts(prev => [{ ...post, comments: []}, ...prev]);
    };

    const addComment = (postId, comment) => {
        setPosts(prev =>
            prev.map(p =>
                p.id === postId
                ? { ...p, comments: [...p.comments, comment]}
                : p
            )
        );
    };

    return(
        <PostsContext.Provider value={{ posts, addPost, addComment }}>
            {children}
        </PostsContext.Provider>
    );
}
export function usePosts(){
    return useContext(PostsContext);
}