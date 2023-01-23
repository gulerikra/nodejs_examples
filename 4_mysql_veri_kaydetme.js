var mysql = require('mysql') //mysql uygulamasıyla bağlantı kurma
var con = mysql.createConnection({
  host :'localhost',
  user :'root',
  password:'root123',
  database: 'mysql_ikra'
  });
  
con.connect(function(err){
    if(err) throw err;
    console.log('MySql Baglanıyor ....');

    //uygulamda oluşturulan tablonun içeriğini yazma
    var sql = "INSERT INTO bilgi (id,ad,soyad,yas) VALUES ?";
    var values=[
        ['08','ikra','guler','21']
    ]
    con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log("records inserted:"+result.affectedRows)
    })
    });
