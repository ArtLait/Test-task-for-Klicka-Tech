let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const testData = require('./data.js');
const sequelize = require('./sqlServer');
const Music = require('./models/music');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello world!');
});

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