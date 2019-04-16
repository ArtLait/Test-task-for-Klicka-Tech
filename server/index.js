let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Music = require('./models/music');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/musics', (req, res) => {
    Music.findAll({
        attributes: ['id', 'name', 'song', 'type', 'date']
    }).then((musics) => {
        res.send(musics);
    }) 
});

app.listen(3001, () => {
    console.log('App listening on port 3001!');
})