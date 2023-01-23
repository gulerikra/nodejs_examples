//Nodejs’te express ile yazılmış bir backend oluşturmak ve get komutuyla mesaj gönderme
var express = require("express"); 

var app = express();

app.get("/", function (req, res) {

    res.send("hello world get komutu");
})
// http://localhost:4000/ adresine gidiniz
app.listen(4000);
