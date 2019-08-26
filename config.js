const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.port,
  dbconnection: process.env.dbconnection,
};
