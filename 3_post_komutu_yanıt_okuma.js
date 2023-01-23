//Nodejs’te express ile yazılmış bir backend oluşturmak ve post komutuyla mesaj gönderme
var express = require("express"); 
var bodyParser = require("body-parser"); 
var _ = require("underscore");

var app = express();
app.use(bodyParser.json());

//post komutunun çıktısı postman uygulaması yardımıyla görünür
app.post("/post_komutu", function (req, res) {
    // postman uygulamasından gönderilecek cevap tipi: body json formatında
    //  {
    //      "ad" : "ikra"
    //  }
    let body = _.pick(req.body, "ad"); // cevabı alma
    res.send(body); // cevabı yazdırma (postmanda)
    console.log(body); // konsol ekranına cevabı yazdırma
})
app.listen(4000); // http://localhost:4000/ adresinden dinleniyor
