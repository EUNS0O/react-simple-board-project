import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function AuthStatus(){
    const{ user, logout } = useAuth();

    return(
        <div style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
            {user
                ?(
                    <>
                        환영합니다, <strong>{user.username}</strong>님!
                        <button onClick={logout} style={{ marginLeft: '1rem' }}>
                            로그아웃
                        </button>
                    </>
                )
                :(
                    <>
                        <a href="/login">로그인</a> / <a href="/signup">회원가입</a>
                    </>
                )
            }
        </div>
    );
}