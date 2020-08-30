const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/spotifyclone'));

//PathLocationStrategy
app.get('/*',function(req, res){
    res.sendFile(path.join(__dirname + '/dist/spotifyclone/index.html'))
})

app.listen(process.env.PORT || 8080);

