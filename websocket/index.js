const koa = require("koa2");
const webSocket = require("ws")

const app = new koa();

const wss = new webSocket.Server({port: 9998})
// 对客户端的连接事件进行监听
// client:代表的是客户端的连接socket对象
wss.on("connection", client => {
    console.log("客户端连接成功")
    client.send("哎呦卧槽")
    // 对客户端的连接对象进行message事件监听
    // msg：由客户端发给服务端的数据
    client.on("message", msg => {
        console.log("客户端发送了" + msg)
        // msg为16进制，使用msg.toString()转为字符串
        // 由服务端往客户端发送数据
        client.send(msg.toString())
    })
})

app.listen(9987)