const koa = require('koa2');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const app = new koa();
app.use(cors());
app.use(bodyParser());

// app.use(async(ctx) => {
//     ctx.body = 'hello koa2'
// })

router.post('/say', ctx => {
    const userName = ctx.request.body.userName
    const password = ctx.request.body.password
    if (userName !== 'crisfei' || password !== 'zkf0701') {
        ctx.status = 500
        ctx.body = {
            message: '用户名或密码错误!'
        }
    } else {
        ctx.body = {
            time: 'dashabi',
            reply: '123'
        }
    }
})

// 启动路由
app.use(router.routes())


app.listen(3300)

console.log('123 running');