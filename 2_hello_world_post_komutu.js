//Nodejs’te express ile yazılmış bir backend oluşturmak ve post komutuyla mesaj gönderme
var express = require("express"); 
var bodyParser = require("body-parser"); 
var _ = require("underscore");

var app = express();
app.use(bodyParser.json());

//post komutunun çıktısı postman uygulaması yardımıyla görünür
app.post("/", function (req, res) {
    
    res.send("hello world post komutu");
    
})
app.listen(4000);
