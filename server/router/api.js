const Koa = require('koa');
const bodyParser = require('koa-body');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const json = require('koa-json');
const cors = require('@koa/cors');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

const userCtlr = require('../controller/userController');

app.use(serve(path.resolve(__dirname, '../uploads')));

app.use(
   bodyParser({
      formidable: {
         uploadDir: './server/uploads',
         onFileBegin: (name, file) => {
            console.log(file);
            file.path =
               file.name === null || file.name === ''
                  ? 'null'
                  : (file.path = `${file.path}.${file.type.split('/')[1]}`);
            console.log(file.path);
         }
      },
      multipart: true,
      urlencoded: true
   })
);
app.use(json());
app.use(cors());

mongoose
   .connect(
      'mongodb://localhost/devlog',
      { useNewUrlParser: true }
   )
   .then(() => console.log('몽고DB 연결 성공'))
   .catch(err => console.log(`몽고DB 연결 실패: ${err}`));

router.get('/', userCtlr.list);

router.get('/api/users/:email', userCtlr.get);

router.post('/api/users', userCtlr.create);

router.get('/api/posts/:email', userCtlr.postList);

router.post('/api/posts/:email', userCtlr.postUpdate);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002, () => console.log('This on 3002'));
