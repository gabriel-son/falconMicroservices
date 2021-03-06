const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const get = require('./routes/get');
const post = require();
const update = require();
const remove = require();

app.use('api/v1/files/file/uploads', get);
app.use('api/v1/files/file/upload', post);
app.use('api/v1/files/file/:id/update', update);
app.use('api/v1/files/file/:id/delete', remove);

const port = (process.env.PORT || 3000);
app.listen(port, ()=> `Server now running on ${port}`)