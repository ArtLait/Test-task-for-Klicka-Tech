const Sequelize = require('sequelize');
const sequelize = require('../sqlServer');

const Model = Sequelize.Model;

class Music extends Model {};

Music.init({
  name: Sequelize.STRING,
  song: Sequelize.STRING,
  type: Sequelize.STRING,
  date: Sequelize.DATE
}, {
  sequelize,
  modelName: 'Music'
});

//Music.findAll();

module.exports = Music;
