
const mysql = require("mysql")

// 数据库默认配置
const database = {
    database: 'world',
    user: 'root',
    password: 'root',
    PORT: '3306',
    host: 'localhost'
}

// 连接池
let pool = mysql.createPool(database);

// 连接数据库
let allSqlAction = (sql, value) => {
    return new Promise((res, rej) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                rej(err)
            } else {
                console.log("数据库连接成功")
                connection.query(sql, value, (err, row) => {
                    if (err) {
                        rej(err)
                    } else {
                        res(row)
                    }
                })
                connection.release()
            }
        })
    })
}

module.exports = {
    allSqlAction
}
