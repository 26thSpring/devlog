const Koa = require('koa');
const bodyParser = require('koa-bodyParser');
const Router = require('koa-router');
const json = require('koa-json');
const cors = require('@koa/cors');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

const userCtlr = require('../controller/userController');

app.use(bodyParser());
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

router.get('/api/posts', (ctx, next) => {
   console.log('this on GET /api/posts');
   ctx.body = '포스트가 호출됐다!';
});

router.post('/api/posts/:email', userCtlr.postUpdate);

router.get('/:email/', (ctx, next) => {
   console.log('this on GET /api/posts');
   ctx.body = '포스트가 호출됐다!';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002, () => console.log('This on 3002'));
