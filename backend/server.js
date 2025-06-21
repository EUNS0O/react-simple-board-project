require('dotenv').config();
const express = require('express');
require('./db'); //MongoDB 연결
const cors = require('cors');
const jwt = require('jsonwebtoken');

const User = require('./models/User');
const Post = require('./models/Post');

const app = express();
app.use(cors());
app.use(express.json());

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({ message:'토큰 필요' });
    try{
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    }catch{
        res.status(401).json({ message:'유효하지 않은 토큰' });
    }
};

//--Auth--
app.post('/api/auth/signup', async (req, res) => {
    const{ username, password } = req.body;
    if(!username||!password) return res.status(400).json({ message:'필수 정보 누락' });
    if(await User.findOne({ username }))
        return res.status(400).json({ message: '이미 존재하는 아이디 '});
    await User.create({ username, password });
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    res.status(201).json({ user:{username}, token });
});

app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if(!user) return res.status(401).json({ message:'인증 실패' });
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    res.json({ user:{username}, token });
});

//---Post CRUD---
app.get('/api/posts', authMiddleware, async (req, res) => {
    const posts = await Post.find().sort({ createdAt:-1 });
    res.json(posts);
});

app.post('/api/posts', authMiddleware, async (req, res) => {
    const { title, content } = req.body;
    const post = await Post.create({ title, content, comments:[] });
    res.status(201).json(post);
});

app.get('/api/posts/:id', authMiddleware, async (req, res)=>{
    const post = await Post.findById(req.params.id);
    if(!post) return res.status(404).json({ message:'글 없음' });
    res.json(post);
});

app.post('/api/posts/:id/comments', authMiddleware, async (req, res) => {
    const{ text } = req.body;
    const post = await Post.findById(req.params.id);
    if(!post) return res.status(404).json({ message:' 글 없음 '});
    post.comments.push({ text });
    await post.save();
    res.status(201).json(post.comments.at(-1));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`▶ Server running on http://localhost:${PORT}`);
});

