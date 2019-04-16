const Sequelize = require('sequelize');
const sequelize = new Sequelize('wCsrq5hKHZ', 'wCsrq5hKHZ', 'bXichTBroo', {
  host: 'remotemysql.com',
  port: 3306,
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
  console.log('Connection has been establish successfully!');
})
.catch(err => {
  console.log('Authenticate error!');
});
module.exports = sequelize;
