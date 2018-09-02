const Koa = require('koa');
const serve = require('koa-static');
const fs = require('fs');
const path = require('path');

const app = new Koa();

// const port = process.env.PORT || 3001;

const indexHTML = fs.readFileSync(
   path.resolve(__dirname, '../build/index.html'),
   { encoding: 'utf8' }
);

app.use(serve(path.resolve(__dirname, '../build/')));
app.use(ctx => {
   ctx.body = indexHTML;
});

app.listen(3001, () => console.log('Server Listening on PORT 3001'));
