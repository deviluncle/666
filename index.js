const koa = require('koa2');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const allSqlAction = require('./database') 

const app = new koa();
app.use(cors());
app.use(bodyParser());

router.post('/say', ctx => {
    
    const userName = ctx.request.body.userName
    const password = ctx.request.body.password
    if (userName !== 'crisfei' || password !== 'zkf0701') {
        ctx.status = 500
        ctx.body = {
            message: '用户名或密码错误!'
        }
        // ctx.throw(500, '用户名或密码错误!')
    } else {
        ctx.status = 200
        ctx.body = {
            time: 'dashabi',
            reply: '123'
        }
    }
})

router.post('/test', async (ctx) => {
    const sql = `SELECT * FROM test_name LIMIT 20`
    const result = await allSqlAction.allSqlAction(sql);
    // console.log(result)
    ctx.body = {
        data: result
    }
})

router.post('/testDelete', async (ctx) => {
    const id = ctx.request.body.id
    const sql = `Delete FROM test_name where id = ${id}`
    await allSqlAction.allSqlAction(sql);
    // console.log(result)
    ctx.status = 200
    ctx.body = {
        message: '删除成功!'
    }
})

router.post('/testEdit', async (ctx) => {
    const id = ctx.request.body.id
    const name = ctx.request.body.name
    const sql = `UPDATE test_name SET name = '${name}' WHERE id = ${id}`
    await allSqlAction.allSqlAction(sql);
    // console.log(result)
    ctx.status = 200
    ctx.body = {
        message: '修改成功!'
    }
})


router.get('/getCsdnArticles', async (ctx) => {
    const sql = `SELECT * FROM csdn`
    const result = await allSqlAction.allSqlAction(sql)

    ctx.body = {
        data: result
    }
})

// router.post('/delete', ctx => {
//   ctx.status = 200
//   ctx.body = {
//       message: '删除成功'
//   }
// })

// 启动路由
app.use(router.routes())



app.listen(3300)

console.log('123 running');