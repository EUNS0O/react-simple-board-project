# 게시판 프로젝트 (Board Project)

간단한 게시판 웹 애플리케이션입니다. 사용자 인증, 게시글 작성/조회, 댓글 기능을 제공합니다.

## 🚀 주요 기능

- **사용자 인증** - 회원가입/로그인
- **게시글 관리** - 게시글 작성, 조회, 목록
- **댓글 시스템** - 게시글에 댓글 작성

## 🛠️ 기술 스택

### Frontend
- **React** - 사용자 인터페이스
- **JavaScript (ES6+)** - 프로그래밍 언어
- **CSS** - 스타일링

### Backend
- **Node.js** - 서버 런타임
- **Express.js** - 웹 프레임워크
- **MongoDB** - 데이터베이스
- **Mongoose** - MongoDB ODM
- **JWT** - 사용자 인증

## 📋 프로젝트 구조

```
react-simple-board-project/
├── backend/
│   ├── models/
│   │   ├── Post.js          # 게시글 스키마
│   │   └── User.js          # 사용자 스키마
│   ├── db.js                # MongoDB 연결 설정
│   ├── server.js            # Express 서버 및 API
│   ├── package.json
│   └── package-lock.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/      # React 컴포넌트
    │   ├── pages/          # 페이지 컴포넌트
    │   ├── hooks/          # 커스텀 훅
    │   ├── contexts/       # Context API
    │   ├── api/            # API 호출 함수
    │   └── utils/          # 유틸리티 함수
    ├── package.json
    └── package-lock.json
```

## ⚙️ 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/EUNS0O/react-simple-board-project.git
cd react-simple-board-project
```

### 2. Backend 설정
```bash
cd backend
npm install
```

**환경변수 설정 (.env 파일 생성)**
```
MONGO_URI=mongodb://localhost:27017/board_db
JWT_SECRET=your-jwt-secret-key
PORT=5000
```

**Backend 실행**
```bash
npm start
```

### 3. Frontend 설정
```bash
cd ../frontend
npm install
```

**환경변수 설정 (.env 파일 생성)**
```
REACT_APP_API_URL=http://localhost:5000
```

**Frontend 실행**
```bash
npm start
```

### 4. 브라우저에서 확인
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📝 API 엔드포인트

### 인증
- `POST /api/auth/signup` - 회원가입
- `POST /api/auth/login` - 로그인

### 게시글
- `GET /api/posts` - 게시글 목록 조회
- `POST /api/posts` - 게시글 작성
- `GET /api/posts/:id` - 특정 게시글 조회
- `POST /api/posts/:id/comments` - 댓글 작성

## 🔐 인증 시스템

- JWT 토큰 기반 인증
- 로그인 후 모든 게시판 기능 이용 가능
- 토큰은 브라우저 로컬 스토리지에 저장

## 💾 데이터베이스 스키마

### User (사용자)
- `username` - 사용자명 (고유값)
- `password` - 비밀번호
- `timestamps` - 생성/수정 시간

### Post (게시글)
- `title` - 제목
- `content` - 내용
- `comments` - 댓글 배열
- `timestamps` - 생성/수정 시간

### Comment (댓글)
- `text` - 댓글 내용
- `timestamps` - 생성/수정 시간