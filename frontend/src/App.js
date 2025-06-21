import React from 'react';
import { PostsProvider } from './contexts/PostsContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';
import AuthStatus from './components/AuthStatus';


function PrivateRoute({ children }){
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App(){
  return(
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter>
          <AuthStatus />
          <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home />} />
            <Route path="/posts/new" element={<CreatePost/>} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  );
}