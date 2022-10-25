/**
 * 封装操作数据库的通用API
 */
 const mysql = require('mysql');

 exports.base = (sql,data,callback) => {
     //创建数据库链接
     const connection = mysql.createConnection({
         host: 'eu-cdbr-west-03.cleardb.net',   //数据库所在的服务器的域名或者IP地址
         user: 'b50e5ff55463da',      //登录数据库的账号
         password: '6ab304a0',
         database: 'heroku_c4e40a811638b4e'    //数据库的名称book,注意这里不是链接的名称，我创建的链接的名称为mybook
     });
     //执行连接操作
     connection.connect();
     
     //操作数据库(数据库操作也是异步的，异步不同通过返回值来处理，只能通过回调函数)
     connection.query(sql,data,(err,results,fields) => {
         if(err) throw err;
         callback(results);
         console.log("sssssssssss!")
     });
     //关闭数据库
     connection.end();
 }
