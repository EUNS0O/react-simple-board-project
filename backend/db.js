require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
if(!uri){
    console.error('.env에 MONGO_URI가 없습니다.');
    process.exit(1);
}

mongoose
    .connect(uri, { useNewUrlParser:true, useUnifiedTopology:true })
    .then(() => console.log('▶ MongoDB connected'))
    .catch(err => {
        console.error('MongoDB 연결 실패:', err);
        process.exit(1);
    });

module.exports = mongoose;
